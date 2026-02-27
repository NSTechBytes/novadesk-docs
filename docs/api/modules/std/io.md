---
title: std I/O APIs (Windows)
---

# std I/O APIs (Windows)

Import:

```javascript
import * as std from "std";
```

#### Table of Contents
[[toc]]

## `std.open(filename, mode[, errObj])`

Opens a file and returns a `std.File` object.

### Parameters

- **`filename`** (`string`): Path to file.
- **`mode`** (`string`): Allowed chars are `r`, `w`, `a`, `+`, `b`, `x`.
- **`errObj`** (`object`, optional): If provided, `errObj.errno` is set on failure.

### Return Value

- **Type**: `std.File | null`
- **Description**: Returns `null` when open fails.

### Example

```javascript
import * as std from "std";

const err = {};
const f = std.open("D:/tmp/a.txt", "rb", err);
if (!f) {
    std.printf("open failed errno=%d\n", err.errno);
}
```

## `std.popen(command, mode[, errObj])`

Opens a process pipe.

### Parameters

- **`command`** (`string`)
- **`mode`** (`string`): Must be `"r"` or `"w"`.
- **`errObj`** (`object`, optional): Receives `errno` on failure.

### Return Value

- **Type**: `std.File | null`

### Example

```javascript
import * as std from "std";

const p = std.popen("cmd /c echo hello", "r");
if (p) {
    std.printf("%s\n", p.getline());
    p.close();
}
```

## `std.fdopen(fd, mode[, errObj])`

Wraps an existing file descriptor into a `std.File`.

### Parameters

- **`fd`** (`number`): Existing file descriptor.
- **`mode`** (`string`): Allowed chars are `r`, `w`, `a`, `+`.
- **`errObj`** (`object`, optional): Receives `errno` on failure.

### Return Value

- **Type**: `std.File | null`

### Example

```javascript
import * as std from "std";
import * as os from "os";

const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    const dupFd = os.dup(f.fileno());
    const wrapped = std.fdopen(dupFd, "r");
    if (wrapped) wrapped.close();
    f.close();
}
```

## `std.tmpfile([errObj])`

Creates a temporary file stream.

### Parameters

- **`errObj`** (`object`, optional): Receives `errno` on failure.

### Return Value

- **Type**: `std.File | null`

### Example

```javascript
import * as std from "std";

const t = std.tmpfile();
if (t) {
    t.puts("temp");
    t.seek(0, std.SEEK_SET);
    std.printf("tmp: %s\n", t.readAsString());
    t.close();
}
```

## `std.loadFile(filename[, options])`

Loads file content directly.

### Parameters

- **`filename`** (`string`)
- **`options`** (`object`, optional):
  - `binary` (`boolean`): If `true`, returns binary (`Uint8Array`) instead of string.

### Return Value

- **Type**: `string | Uint8Array | null`
- **Description**: `null` when file cannot be read.

### Example (text)

```javascript
import * as std from "std";

const text = std.loadFile("D:/tmp/a.txt");
std.printf("text loaded: %s\n", text !== null ? "yes" : "no");
```

### Example (binary)

```javascript
import * as std from "std";

const data = std.loadFile("D:/tmp/a.bin", { binary: true });
std.printf("binary length: %d\n", data ? data.length : 0);
```
