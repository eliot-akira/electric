import anyTest, { TestFn } from 'ava'
import { makeMigration, parseMetadata } from '../../../src/migrators/builder'
import { ContextType, builderTests, makeMigrationMetaData } from '../builder'
import { PGlite } from '@electric-sql/pglite'
import { DatabaseAdapter } from '../../../src/drivers/pglite'
import { PgBundleMigrator } from '../../../src/migrators'
import { pgBuilder } from '../../../src/migrators/query-builder'

const test = anyTest as TestFn<ContextType>

test.beforeEach(async (t) => {
  const builder = pgBuilder
  const migrationMetaData = makeMigrationMetaData(builder)

  t.context = {
    migrationMetaData,
    builder,
  }
})

// No need to run the bundleTests because
// they are already ran by `../postgres/builder.test.ts`
// and the tests do not use an actual PG database
builderTests(test)

test('load migration from meta data', async (t) => {
  const { migrationMetaData, builder } = t.context
  const migration = makeMigration(parseMetadata(migrationMetaData), builder)
  const db = new PGlite()
  const stop = () => db.close()
  const adapter = new DatabaseAdapter(db)
  const migrator = new PgBundleMigrator(adapter, [migration])

  // Apply the migration
  await migrator.up()

  // Check that the DB is initialized with the stars table
  const tables = await adapter.query({
    sql: `
    SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = 'stars';`,
  })

  const starIdx = tables.findIndex((tbl) => tbl.table_name === 'stars')
  t.assert(starIdx >= 0) // must exist

  const columns = await adapter
    .query({
      sql: `SELECT column_name
    FROM information_schema.columns
    WHERE table_name = 'stars';`,
    })
    .then((columns) => columns.map((column) => column.column_name))

  t.deepEqual(columns, ['id', 'avatar_url', 'name', 'starred_at', 'username'])
  await stop()
})
