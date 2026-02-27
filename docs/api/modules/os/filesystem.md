---
title: os filesystem APIs (Windows)
---

# os Filesystem APIs (Windows)

Import:

```javascript
import * as os from "os";
```

#### Table of Contents
[[toc]]

## `os.getcwd()`

Returns current working directory.

### Return Value

- **Type**: `string`
- **Description**: Absolute path of current working directory.

### Example

```javascript
console.log("cwd:", os.getcwd());
```

## `os.chdir(path)`

Changes current working directory.

### Parameters

- **`path`** (`string`): Target directory.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
const rc = os.chdir("D:/tmp");
console.log("chdir:", rc);
```

## `os.mkdir(path[, mode])`

Creates a directory.

### Parameters

- **`path`** (`string`): Directory path to create.
- **`mode`** (`number`, optional): Permission bits (primarily relevant on POSIX).

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
const rc = os.mkdir("D:/tmp/new-folder", 0o777);
console.log("mkdir:", rc);
```

## `os.readdir(path)`

Reads directory entries.

### Parameters

- **`path`** (`string`): Directory path.

### Return Value

- **Type**: `string[] | object[] | null`
- **Description**: Directory entries (format may vary by runtime build). `null`/error value on failure.

### Example

```javascript
const entries = os.readdir(".");
console.log("entries:", entries);
```

## `os.remove(path)`

Removes a file (and may remove directories depending on platform/runtime behavior).

### Parameters

- **`path`** (`string`): Target path.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
const rc = os.remove("D:/tmp/old.txt");
console.log("remove:", rc);
```

## `os.rename(oldPath, newPath)`

Renames or moves a file/directory.

### Parameters

- **`oldPath`** (`string`): Existing path.
- **`newPath`** (`string`): New path.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
const rc = os.rename("D:/tmp/a.txt", "D:/tmp/b.txt");
console.log("rename:", rc);
```

## `os.stat(path)`

Returns file metadata for a path.

### Parameters

- **`path`** (`string`): Target path.

### Return Value

- **Type**: `object | null`
- **Description**: File metadata object on success, `null` on error.
- **What it gives you**: mode/type bits, timestamps, size, uid/gid-like fields (depending on runtime/platform mapping).

### Example

```javascript
const st = os.stat("D:/tmp/b.txt");
console.log("stat:", st);
```

## `os.realpath(path)` (platform)

Resolves a path to its canonical absolute path.

### Parameters

- **`path`** (`string`): Input path.

### Return Value

- **Type**: `string | null`
- **Description**: Resolved path string on success, `null` on error.

### Example

```javascript
if (typeof os.realpath === "function") {
    console.log("realpath:", os.realpath("."));
}
```

## `os.utimes(path, atimeMs, mtimeMs)`

Updates file access and modification times.

### Parameters

- **`path`** (`string`): Target path.
- **`atimeMs`** (`number`): Access time in milliseconds.
- **`mtimeMs`** (`number`): Modification time in milliseconds.

### Return Value

- **Type**: `number`
- **Description**: `0` on success, negative value on error.

### Example

```javascript
const now = Date.now();
const rc = os.utimes("D:/tmp/b.txt", now, now);
console.log("utimes:", rc);
```

## Common Constants

### Available on Windows

- **`os.S_IFMT`**: Bitmask used to extract file type bits from mode value.
- **`os.S_IFIFO`**: FIFO/pipe file type bit.
- **`os.S_IFCHR`**: Character device file type bit.
- **`os.S_IFDIR`**: Directory file type bit.
- **`os.S_IFBLK`**: Block device file type bit.
- **`os.S_IFREG`**: Regular file type bit.

## Example

```javascript
import * as os from "os";

console.log("cwd:", os.getcwd());
console.log("entries:", os.readdir("."));

const st = os.stat(".");
console.log("stat:", st);
```

## Windows Scope

This page documents Windows-available filesystem APIs only:
`getcwd`, `chdir`, `mkdir`, `readdir`, `remove`, `rename`, `stat`, `realpath`, and `utimes`.

APIs that are commonly non-Windows in this QuickJS build (for example `lstat`, `symlink`, `readlink`) are intentionally excluded here.
