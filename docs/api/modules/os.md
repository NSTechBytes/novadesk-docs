---
title: QuickJS os module index
---

# os Module

The `os` module is provided by QuickJS (`quickjs-libc.c`).
It exposes low-level operating-system APIs for file descriptors, filesystem, process control,
timers, signals, paths, and optional worker threads.

```javascript
import * as os from "os";
```

#### Table of Contents
[[toc]]

## How To Use In JS

Use it as a runtime module (not from `system`):

```javascript
import * as os from "os";

console.log(os.platform);
console.log(os.getcwd());
```

## API Sections

- [Usage](./os/usage.md): Import style and first examples.
- [I/O and FD](./os/io.md): `open`, `close`, `seek`, `read`, `write`, terminal helpers.
- [Filesystem](./os/filesystem.md): `getcwd`, `chdir`, `mkdir`, `readdir`, `stat`, `realpath`, links.
- [Process](./os/process.md): `exec`, `getpid`, `waitpid`, `kill`, `pipe`, `dup`, `dup2`.
- [Timers and Time](./os/timers.md): `now`, `sleep`, `sleepAsync`, timeout/interval APIs.
- [Signals](./os/signals.md): `signal` and signal constants.
- [Worker](./os/worker.md): `os.Worker` and message passing.

## Platform Notes

- API availability is platform-dependent (`Windows`, `POSIX`, `wasi`).
- Some exports are compile-guarded in `quickjs-libc.c`.
- `Worker` exists only when `USE_WORKER` is enabled.
