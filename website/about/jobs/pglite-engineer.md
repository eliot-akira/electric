---
title: PGlite Engineer - Jobs
description: >-
  We're looking for a generalist web and systems engineer to join the core PGlite team,
  working mainly in Typescript, Rust and C++.
image: /img/icons/pglite.svg
outline: deep
---

# PGlite Engineer

| | |
| ----- | -------- |
| **Basis** | Full time or contract |
| **Salary** | €80-100k |
| **Location** | Remote in Europe or eastern US |
| **Published** | 1st October 2024 |
| **Deadline**  | 21st October 2024 |

We're looking for a generalist web and systems engineer to join the core PGlite team, working mainly in Typescript, Rust and C++.

PGlite is a [lightweight embeddable/WASM Postgres](https://pglite.dev). It's a fast growing open source project, with 8k GitHub stars and over 100k weekly downloads. It opens up new possibilities for local-first apps and systems built on an embedded, real-time, reactive Postgres, such as [https://postgres.new](https://postgres.new)

<div style="max-width: 452px; margin: 24px 0">
  <div class="embed-container">
    <YoutubeEmbed video-id="ooWaPVvljlU" />
  </div>
</div>

You'll be part of the core PGlite team at [ElectricSQL](https://electric-sql.com/about/team), working closely with [Sam Willis](https://github.com/samwillis) and [Paul Peny](https://github.com/pmp-p). It's a full time or contract role, working remotely in Europe or eastern US. Remuneration depends on how the hiring is structured but would be a ~€80-100k salary for full time (we work a 4 day week).

See the [Jobs](/about/jobs/) and [Team](/about/team) pages for more information about working at Electric and to see the team you'll be joining.

You will collaborate with partners and contributors like Supabase and the wider open source community. So you need great communication skills and ideally experience of building open source. Technically, you need strong Typescript and systems programming experience, ideally in C++ and Rust. It would be great if (but is not essential that) you're familiar with some aspects of database internals, filesystems and WASM.

Current priorities include developing a libpglite version of PGite that can be embedded in native apps, creating an HTTP/S3 VFS, multi-connection, robustness and stability improvements.  Example tasks that you might pick up include things like:

- write a HTTP VFS for PGlite (in Typescript) that allows an instance to load a database from a HTTP or S3 end point, using HTTP range requests
- improve the OPFS VFS so that it works in Safari, this probably involves creating a mini-filesystem (using b-trees) that maps multiple files to a single file
- fix bugs in PGlite - could be anything from JS/TS bugs to chasing down obscure issues caused by Postgres being compiled to WASM
- help to port Postgres extensions that are written in c++ (e.g.: `pg_duck`) or Rust (e.g.: `pg_search`) to PGlite
- create a Postgres extension that allows you to call Javascript functions from Postgres&nbsp;triggers
- investigate and build out support for PGlite on various serverless/edge platforms (Cloudflare, Fastly), would involve building VFSs backed by object stores and optimising the WASM build for restricted environments
- document how to build Postgres extensions for PGlite for common languages like <span class="no-wrap">C, C++ and Rust</span>

It's a core role at a fast moving project, so priorities evolve quickly. It's essential that you're self-directed and can be productive in a small team environment.

You need to be able to write your own requirement docs and move between research and implementation with the right balance of planning and velocity. You also need to write public docs and help debug and fix issues, so that developers and collaborators can be successful using and building PGlite.

### How to apply

Apply using the form linked below:

<VPButton
    href="https://airtable.com/appNnEkluhSOHeyQ1/pagm3FNVgH4DOVhUO/form"
    text="View application form"
    target="_blank"
/>

The first step is a 45 minute call. After that, the process is personalised but we strive to keep it as efficient as possible and move swiftly to an offer.