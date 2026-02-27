---
title: os I/O and file descriptors (Windows)
---

# os I/O and FD APIs (Windows)

Import:

```javascript
import * as os from "os";
```

#### Table of Contents
[[toc]]

## `os.open(path, flags[, mode])`

Opens a file and returns a file descriptor (`fd`).

### Parameters

- **`path`** (`string`): File path.
- **`flags`** (`number`): Open flags combined with bitwise OR, for example `os.O_WRONLY | os.O_CREAT | os.O_TRUNC`.
- **`mode`** (`number`, optional): Optional create mode value. On Windows, open flags are typically the important part.

### Return Value

- **Type**: `number`
- **Description**: File descriptor (`>= 0`) on success, negative value on error.

### Example

```javascript
import * as os from "os";

const fd = os.open("D:/tmp/log.txt", os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o666);
if (fd < 0) {
    console.log("open failed:", fd);
}
```

## `os.close(fd)`

Closes an open file descriptor.

### Parameters

- **`fd`** (`number`): File descriptor from `os.open`.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
if (fd >= 0) {
    const rc = os.close(fd);
    console.log("close:", rc);
}
```

## `os.seek(fd, offset, whence)`

Moves the read/write pointer for a file descriptor.

### Parameters

- **`fd`** (`number`): File descriptor.
- **`offset`** (`number`): Byte offset.
- **`whence`** (`number`): Seek base (`0` = start, `1` = current, `2` = end).

### Return Value

- **Type**: `number`
- **Description**: New position on success, negative value on error.

### Example

```javascript
const pos = os.seek(fd, 0, 0); // go to file start
console.log("position:", pos);
```

## `os.read(fd, buffer, offset, length)`

Reads bytes from a file descriptor into an ArrayBuffer/TypedArray.

### Parameters

- **`fd`** (`number`): File descriptor.
- **`buffer`** (`ArrayBuffer | TypedArray`): Destination buffer.
- **`offset`** (`number`): Start offset in destination buffer.
- **`length`** (`number`): Number of bytes to read.

### Return Value

- **Type**: `number`
- **Description**: Number of bytes read, `0` on EOF, negative value on error.

### Example

```javascript
const buf = new Uint8Array(256);
const n = os.read(fd, buf, 0, buf.length);
console.log("read bytes:", n);
```

## `os.write(fd, bufferOrString, offset, length)`

Writes bytes (or a string) to a file descriptor.

### Parameters

- **`fd`** (`number`): File descriptor.
- **`bufferOrString`** (`ArrayBuffer | TypedArray | string`): Source data.
- **`offset`** (`number`): Start offset (for buffer input).
- **`length`** (`number`): Number of bytes to write (for buffer input).

### Return Value

- **Type**: `number`
- **Description**: Number of bytes written, or negative value on error.

### Example (string)

```javascript
const w = os.write(fd, "Hello from os.write\n");
console.log("written:", w);
```

### Example (buffer)

```javascript
const data = new TextEncoder().encode("buffer write\n");
const w2 = os.write(fd, data, 0, data.length);
console.log("written:", w2);
```

## `os.isatty(fd)`

Checks whether a file descriptor is attached to a terminal.

### Parameters

- **`fd`** (`number`): File descriptor (`0` stdin, `1` stdout, `2` stderr).

### Return Value

- **Type**: `boolean`
- **Description**: `true` if descriptor is a TTY, otherwise `false`.

### Example

```javascript
console.log("stdout is tty:", os.isatty(1));
```

## `os.ttyGetWinSize(fd)` (platform)

Gets terminal window size for a TTY descriptor.

### Parameters

- **`fd`** (`number`): TTY file descriptor.

### Return Value

- **Type**: `number[] | null`
- **Description**: Typically `[columns, rows]`, or `null`/error value when unavailable.

### Example

```javascript
if (typeof os.ttyGetWinSize === "function") {
    console.log("tty size:", os.ttyGetWinSize(1));
}
```

## `os.ttySetRaw(fd)` (platform)

Switches terminal into raw input mode.

### Parameters

- **`fd`** (`number`): TTY file descriptor.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
if (typeof os.ttySetRaw === "function" && os.isatty(0)) {
    const rc = os.ttySetRaw(0);
    console.log("set raw:", rc);
}
```

## Common Constants

### Open Flags

- **`os.O_RDONLY`**: Open file for read only.
- **`os.O_WRONLY`**: Open file for write only.
- **`os.O_RDWR`**: Open file for read and write.
- **`os.O_APPEND`**: Append writes to end of file.
- **`os.O_CREAT`**: Create file if it does not exist.
- **`os.O_EXCL`**: With `O_CREAT`, fail if file already exists.
- **`os.O_TRUNC`**: Truncate file to zero length when opening for write.
- **`os.O_BINARY`**: Open in binary mode (Windows).
- **`os.O_TEXT`**: Open in text mode (Windows).

### Flag Combination Example

```javascript
const fd2 = os.open(
    "D:/tmp/output.txt",
    os.O_WRONLY | os.O_CREAT | os.O_TRUNC,
    0o666
);
```

## Full Example

```javascript
import * as os from "os";

const path = "D:/tmp/sample.txt";
const fd = os.open(path, os.O_RDWR | os.O_CREAT | os.O_TRUNC, 0o666);
if (fd >= 0) {
    os.write(fd, "First line\n");
    os.seek(fd, 0, 0);
    const out = new Uint8Array(64);
    const n = os.read(fd, out, 0, out.length);
    console.log("read after seek:", n);
    os.close(fd);
}
```

## Windows Scope

This page documents the Windows-available `os` I/O APIs only:
`open`, `close`, `seek`, `read`, `write`, `isatty`, `ttyGetWinSize`, `ttySetRaw`,
and Windows open flags including `O_BINARY` and `O_TEXT`.
