---
title: std.File methods (Windows)
---

# std.File Methods (Windows)

Methods available on objects returned by `std.open`, `std.popen`, `std.tmpfile`, `std.fdopen`.

#### Table of Contents
[[toc]]

## `file.close()`

Closes the handle.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "r");
if (f) {
    const rc = f.close();
    std.printf("close rc=%d\n", rc);
}
```

## `file.puts(...args)`

Writes text values.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "w");
if (f) {
    f.puts("hello", " ", "world", "\n");
    f.close();
}
```

## `file.printf(format, ...args)`

Formatted write to file.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "w");
if (f) {
    f.printf("n=%d\n", 10);
    f.close();
}
```

## `file.flush()`

Flushes buffered output.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "w");
if (f) {
    f.puts("data");
    f.flush();
    f.close();
}
```

## `file.tell()`

Returns numeric file position.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    std.printf("tell=%d\n", f.tell());
    f.close();
}
```

## `file.tello()`

Returns bigint-capable position.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    std.printf("tello=%s\n", String(f.tello()));
    f.close();
}
```

## `file.seek(offset, whence)`

Moves file cursor.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    f.seek(0, std.SEEK_END);
    std.printf("size=%d\n", f.tell());
    f.close();
}
```

## `file.eof()`

Checks end-of-file state.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "r");
if (f) {
    while (!f.eof()) {
        if (f.getline() === null) break;
    }
    std.printf("eof=%s\n", f.eof() ? "true" : "false");
    f.close();
}
```

## `file.error()`

Checks stream error flag.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "r");
if (f) {
    std.printf("error=%s\n", f.error() ? "true" : "false");
    f.close();
}
```

## `file.clearerr()`

Clears stream flags.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "r");
if (f) {
    f.clearerr();
    f.close();
}
```

## `file.fileno()`

Returns underlying file descriptor.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "r");
if (f) {
    std.printf("fd=%d\n", f.fileno());
    f.close();
}
```

## `file.read(buffer[, offset, length])`

Reads bytes into a typed array.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    const buf = new Uint8Array(32);
    const n = f.read(buf, 0, buf.length);
    std.printf("read=%d\n", n);
    f.close();
}
```

## `file.write(data[, offset, length])`

Writes string or bytes.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "wb");
if (f) {
    const n = f.write("abc\n");
    std.printf("write=%d\n", n);
    f.close();
}
```

## `file.getline()`

Reads one line, returns `null` at EOF.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "r");
if (f) {
    const line = f.getline();
    std.printf("line=%s\n", line);
    f.close();
}
```

## `file.readAsArrayBuffer([maxSize])`

Reads remaining data as ArrayBuffer.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    const ab = f.readAsArrayBuffer();
    std.printf("ab=%d\n", ab.byteLength);
    f.close();
}
```

## `file.readAsString([maxSize])`

Reads remaining data as string.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "r");
if (f) {
    const s = f.readAsString();
    std.printf("text=%s\n", s);
    f.close();
}
```

## `file.getByte()`

Reads one byte.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "rb");
if (f) {
    const b = f.getByte();
    std.printf("byte=%d\n", b);
    f.close();
}
```

## `file.putByte(value)`

Writes one byte.

### Example

```javascript
const f = std.open("D:/tmp/a.txt", "wb");
if (f) {
    f.putByte(65); // 'A'
    f.close();
}
```
