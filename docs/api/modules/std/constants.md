---
title: std constants and error object (Windows)
---

# std Constants and Error (Windows)

#### Table of Contents
[[toc]]

## Seek Constants

- `std.SEEK_SET`: seek from start.
- `std.SEEK_CUR`: seek from current position.
- `std.SEEK_END`: seek from end.

## Error Constants

`std.Error` includes common errno-like constants, including:

- `EINVAL`
- `EIO`
- `EACCES`
- `EEXIST`
- `ENOSPC`
- `ENOSYS`
- `EBUSY`
- `ENOENT`
- `EPERM`
- `EPIPE`
- `EBADF`

Use `std.strerror(code)` to convert an error code into a readable string.

## Practical Meaning (Common)

- `ENOENT`: path/file does not exist.
- `EACCES` / `EPERM`: access denied / operation not permitted.
- `EEXIST`: already exists.
- `EINVAL`: invalid argument.
- `ENOSPC`: no space left on device.
- `EBADF`: bad file descriptor.

## Example

```javascript
import * as std from "std";

const err = std.Error.ENOENT;
std.printf("ENOENT=%d %s\n", err, std.strerror(err));
```

## Example with seek constants

```javascript
import * as std from "std";

const f = std.open("D:/tmp/std-demo.txt", "r");
if (f) {
    f.seek(0, std.SEEK_END);
    std.printf("size=%d\n", f.tell());
    f.close();
}
```
