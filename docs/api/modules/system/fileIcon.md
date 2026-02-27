---
title: Extract file icons with the file-icon module.
---

# file-icon Module
Extract and export file icons to `.ico` format using the system API.

The file-icon module can be accessed using `require("file-icon")`.

```javascript
const fileIcon = require("file-icon");
```

#### Table of Contents
[[toc]]

## `fileIcon.extractFileIcon(sourcePath, [outPath], [size])`

Extracts the icon for a file or application and saves it as an `.ico` file.

- **`sourcePath`**
  - **Type**: `string`
  - **Required**: Yes
  - **Description**: Path to the source file (e.g., `.exe`, `.lnk`). Relative paths resolve from the current script directory.

- **`outPath`**
  - **Type**: `string`
  - **Required**: No
  - **Description**: Destination `.ico` path. When omitted, Novadesk writes to `%TEMP%\Novadesk\FileIcons\`.

- **`size`**
  - **Type**: `number`
  - **Required**: No
  - **Default**: `48`
  - **Description**: Preferred icon size in pixels. Values above `256` are clamped to `256`.

- **Returns** (`string | null`): Absolute path of the exported `.ico` file on success, or `null` on failure.

::: info
- When `outPath` is omitted, the filename is deterministic (hashed from `sourcePath` and `size`), so repeated calls reuse the cache.
- Relative `outPath` values resolve against the current script directory.
:::

## Examples

### Auto Cached Output

```javascript
const fileIcon = require("file-icon");
var cachedPath = fileIcon.extractFileIcon("C:\\Windows\\System32\\notepad.exe");
console.log("Cached icon:", cachedPath);
```

### Custom Output Path and Size

```javascript
const fileIcon = require("file-icon");
var saved = fileIcon.extractFileIcon("C:\\Windows\\System32\\calc.exe", "icons/calc.ico", 128);
console.log("Saved icon:", saved);
```
