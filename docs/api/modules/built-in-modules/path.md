---
title: Utilities for working with file and directory paths via the path module.
---

# path Module
Utilities for working with file and directory paths in Novadesk.

::: warning
`path` is accessed via `require("path")` in the Main script.
:::

The `path` module provides helpers for joining, resolving, and analyzing paths.

```javascript
const path = require("path");
```

#### Table of Contents
[[toc]]

## `path.join([...paths])`

Joins all given segments using the platform separator and normalizes the result.

### Example

```javascript
var fullPath = path.join("C:", "Users", "John", "Desktop", "widget.js");
// Returns: "C:\\Users\\John\\Desktop\\widget.js"
```

## `path.resolve([...paths])`

Resolves a sequence of paths into an absolute path.

### Example

```javascript
var absolutePath = path.resolve("data", "settings.json");
// Returns absolute path relative to the application directory
```

## `path.dirname(path)`

Returns the directory portion of a path.

### Example

```javascript
var dir = path.dirname("/app/data/file.txt");
// Returns: "/app/data"
```

## `path.basename(path[, ext])`

Returns the last portion of a path, optionally stripping an extension.

### Example

```javascript
var file = path.basename("/app/data/file.txt");
// Returns: "file.txt"

var name = path.basename("/app/data/file.txt", ".txt");
// Returns: "file"
```

## `path.extname(path)`

Returns the extension of the path.

### Example

```javascript
var ext = path.extname("index.html");
// Returns: ".html"
```

## `path.parse(path)`

Returns an object describing the path components (`root`, `dir`, `base`, `ext`, `name`).

### Example

```javascript
var parts = path.parse("C:\\path\\to\\file.txt");
/*
{
  root: 'C:\\\\',
  dir: 'C:\\\\path\\\\to',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

## `path.isAbsolute(path)`

Determines if the path is absolute.

### Example

```javascript
path.isAbsolute("C:\\Users\\Desktop"); // Returns: true
path.isAbsolute("../images/logo.png"); // Returns: false
```

## `path.normalize(path)`

Normalizes the path, resolving `.` and `..` segments.

### Example

```javascript
var normalized = path.normalize("C:\\Users\\Documents\\..\\Desktop\\.\\widget.js");
// Returns: "C:\\Users\\Desktop\\widget.js"
```

## `path.relative(from, to)`

Returns the relative path from `from` to `to`.

### Example

```javascript
var rel = path.relative("C:\\data\\orandea\\test\\aaa", "C:\\data\\orandea\\impl\\bbb");
// Returns: "..\\..\\impl\\bbb"
```
