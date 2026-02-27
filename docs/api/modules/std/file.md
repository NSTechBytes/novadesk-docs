---
title: std file APIs (Windows)
---

# std File APIs (Windows)

#### Table of Contents
[[toc]]

## `std.open(filename, mode[, errObj])`

Opens a file and returns `std.File` object, or `null` on failure.

### Parameters

- **`filename`** (`string`)
- **`mode`** (`string`): C-style mode (`r`, `w`, `a`, `+`, `b`, `x` combinations).
- **`errObj`** (`object`, optional): Receives `errno` on failure.

### Return Value

- **Type**: `std.File | null`

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "rb");
if (f) f.close();
```

## `std.popen(command, mode[, errObj])`

Opens a process pipe (`mode` is `"r"` or `"w"`), returns `std.File` or `null`.

### Parameters

- **`command`** (`string`)
- **`mode`** (`"r" | "w"`)
- **`errObj`** (`object`, optional)

### Return Value

- **Type**: `std.File | null`

### Example

```javascript
const p = std.popen("cmd /c echo hello", "r");
if (p) {
    std.printf("%s\n", p.getline());
    p.close();
}
```

## `std.tmpfile([errObj])`

Creates a temporary file and returns `std.File` or `null`.

### Parameters

- **`errObj`** (`object`, optional)

### Return Value

- **Type**: `std.File | null`

### Example

```javascript
const t = std.tmpfile();
if (t) {
    t.puts("temp data");
    t.close();
}
```

## `std.fdopen(fd, mode[, errObj])`

Wraps an existing FD into `std.File`.

### Parameters

- **`fd`** (`number`)
- **`mode`** (`string`)
- **`errObj`** (`object`, optional)

### Return Value

- **Type**: `std.File | null`

### Example

```javascript
import * as os from "os";

const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    const dupFd = os.dup(f.fileno());
    const wrapped = std.fdopen(dupFd, "r");
    if (wrapped) wrapped.close();
    f.close();
}
```

## Streams Exported by Module

- `std.in`
- `std.out`
- `std.err`

### Examples

```javascript
std.out.puts("to stdout\n");
std.err.puts("to stderr\n");
```

### Notes

- These are `std.File` handles for stdin, stdout, stderr.
- They are managed by runtime; do not close standard streams in normal usage.

## Example with `errObj`

```javascript
import * as std from "std";

const err = {};
const f = std.open("D:/missing/path/file.txt", "r", err);
if (!f) {
    std.printf("open failed errno=%d\n", err.errno);
}
```
