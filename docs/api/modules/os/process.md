---
title: os process APIs (Windows)
---

# os Process APIs (Windows)

Import:

```javascript
import * as os from "os";
```

#### Table of Contents
[[toc]]

## `os.exec(args[, options])`

Runs a process.

### Parameters

- **`args`** (`string[]`): Command and arguments (first item is executable/command).
- **`options`** (`object`, optional): Runtime options (depends on QuickJS build), such as working directory/env/std handles.

### Return Value

- **Type**: `number`
- **Description**: Exit code on success, negative value on error/signal-like termination mapping.

### Example

```javascript
import * as os from "os";

const code = os.exec(["cmd", "/c", "echo", "hello"]);
console.log("exit code:", code);
```

## `os.getpid()`

Returns current process ID.

### Return Value

- **Type**: `number`
- **Description**: Current process ID.

### Example

```javascript
console.log("pid:", os.getpid());
```

## `os.waitpid(pid, block)`

Waits for a process state change.

### Parameters

- **`pid`** (`number`): Process ID to wait for.
- **`block`** (`boolean`): `true` to block, `false` for non-blocking wait.

### Return Value

- **Type**: `number[]`
- **Description**: Usually `[pid, status]`.

### Example

```javascript
const result = os.waitpid(-1, false);
console.log("waitpid:", result);
```

## `os.kill(pid, signal)`

Sends a signal/termination request to a process.

### Parameters

- **`pid`** (`number`): Target process ID.
- **`signal`** (`number`): Signal constant (for example `os.SIGTERM`).

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
const rc = os.kill(12345, os.SIGTERM);
console.log("kill:", rc);
```

## `os.pipe()`

Creates a pipe.

### Return Value

- **Type**: `number[] | null`
- **Description**: `[readFd, writeFd]` on success, `null` on failure.

### Example

```javascript
const p = os.pipe();
console.log("pipe:", p);
```

## `os.dup(fd)`

Duplicates a file descriptor.

### Parameters

- **`fd`** (`number`): Existing file descriptor.

### Return Value

- **Type**: `number`
- **Description**: New descriptor on success, negative value on error.

## `os.dup2(oldfd, newfd)`

Duplicates `oldfd` into `newfd`.

### Parameters

- **`oldfd`** (`number`): Source descriptor.
- **`newfd`** (`number`): Target descriptor.

### Return Value

- **Type**: `number`
- **Description**: `newfd` on success, negative value on error.

## Common Constants (Windows scope)

- `os.WNOHANG`: Non-blocking wait option (used with wait APIs when supported by runtime).

## Windows Scope

This page documents the Windows-available process APIs in this QuickJS `os` runtime.
