# PocketBase + Vue3 

This repository contains code for spinning up a [Pocketbase](https://pocketbase.io/) server/db with Vue!

# Requirements

Assumes that you have `brew` and `curl` for installing dependencies, and `go` for running code.

Install the additional dependencies (assuming MacOS operating system) via the `bin/setup` script:

```bash
bin/setup
```

# Development

```bash
task dev
```

# Production

Build and send the assets to the server:

```bash
task deploy
task connect
./pocketbase serve # In the EC2 Instance..
```
