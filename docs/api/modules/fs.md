---
title: Read and write files with the fs module
---

# fs Module

Use `fs` for file-system operations — reading and writing text files, creating directories, copying, renaming, and inspecting metadata.

```javascript
import * as fs from "fs";
```

::: info Availability
`fs` is intended for the [Main script](/guides/script-types.html#main-script-the-brain). It is not available in UI scripts.
:::

::: info Path resolution
Both absolute and relative paths are accepted. Relative paths resolve from the **entry script directory** (the folder containing `index.js`), not the current working directory.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="fs.readFile(path)"
  badge="fs"
  badgeType="core"
  returns="string | null"
  :parameters="[
    { name: 'path', type: 'string', description: 'File path to read. Relative paths resolve from the entry script directory.' }
  ]"
>

Reads the full contents of a file and returns it as a UTF-8 string. Returns `null` if the file cannot be opened or does not exist.

<template #example>

```javascript
import * as fs from "fs";

const content = fs.readFile(__dirname + "\\config.json");
if (content !== null) {
  const config = JSON.parse(content);
  console.log(config);
} else {
  console.warn("config.json not found");
}
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.writeFile(path, data [, append])"
  badge="fs"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'path', type: 'string', description: 'Target file path.' },
    { name: 'data', type: 'string', description: 'Text content to write.' },
    { name: 'append', type: 'boolean', optional: true, description: 'true appends to the file; false (default) overwrites it.' }
  ]"
>

Writes text to a file. Creates the file if it does not exist. Returns `true` on success, `false` on failure.

<template #example>

```javascript
import * as fs from "fs";

// Overwrite (default)
fs.writeFile(__dirname + "\\log.txt", "Started\n");

// Append subsequent lines
fs.writeFile(__dirname + "\\log.txt", "Line 2\n", true);

const result = fs.readFile(__dirname + "\\log.txt");
console.log(result); // "Started\nLine 2\n"
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.exists(path)"
  badge="fs"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'path', type: 'string', description: 'File or directory path to test.' }
  ]"
>

Returns `true` if the path exists (file, directory, or symlink), `false` otherwise.

<template #example>

```javascript
import * as fs from "fs";

if (!fs.exists(__dirname + "\\data")) {
  fs.mkdir(__dirname + "\\data");
}
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.mkdir(path [, recursive])"
  badge="fs"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'path', type: 'string', description: 'Directory path to create.' },
    { name: 'recursive', type: 'boolean', optional: true, description: 'true (default) creates all intermediate directories. false creates only the final directory.' }
  ]"
>

Creates a directory. Returns `true` if the directory exists after the call (including if it already existed), `false` on failure.

<template #example>

```javascript
import * as fs from "fs";

// Creates "data/cache/images" and all intermediate folders
fs.mkdir(__dirname + "\\data\\cache\\images");

// Non-recursive — only works if "data" already exists
fs.mkdir(__dirname + "\\data\\logs", false);
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.readdir(path)"
  badge="fs"
  badgeType="core"
  returns="string[]"
  :parameters="[
    { name: 'path', type: 'string', description: 'Directory path to list.' }
  ]"
>

Returns an array of entry names (files and subdirectories) inside the given directory. Returns an empty array if the directory is empty or cannot be read. Entry names are filenames only — not full paths.

<template #example>

```javascript
import * as fs from "fs";

const entries = fs.readdir(__dirname + "\\data");
console.log(entries); // ["config.json", "cache", "log.txt"]

// Build full paths
const fullPaths = entries.map(name => __dirname + "\\data\\" + name);
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.unlink(path)"
  badge="fs"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'path', type: 'string', description: 'Path to the file or empty directory to remove.' }
  ]"
>

Removes a file or an **empty** directory. Returns `true` on success, `false` on failure (e.g. path does not exist or directory is not empty).

::: warning
`unlink` cannot remove non-empty directories. Use it on individual files or empty folders only.
:::

<template #example>

```javascript
import * as fs from "fs";

const removed = fs.unlink(__dirname + "\\temp.txt");
console.log("removed:", removed); // true
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.rename(from, to)"
  badge="fs"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'from', type: 'string', description: 'Existing file or directory path.' },
    { name: 'to', type: 'string', description: 'New path. Can be in a different directory to move the entry.' }
  ]"
>

Renames or moves a file or directory. Returns `true` on success, `false` on failure.

<template #example>

```javascript
import * as fs from "fs";

// Rename in place
fs.rename(__dirname + "\\old.txt", __dirname + "\\new.txt");

// Move to a different folder
fs.rename(__dirname + "\\temp.txt", __dirname + "\\archive\\temp.txt");
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.copyFile(from, to [, overwrite])"
  badge="fs"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'from', type: 'string', description: 'Source file path.' },
    { name: 'to', type: 'string', description: 'Destination file path.' },
    { name: 'overwrite', type: 'boolean', optional: true, description: 'true (default) overwrites the destination if it exists. false fails if the destination already exists.' }
  ]"
>

Copies a file from `from` to `to`. Returns `true` on success, `false` on failure.

<template #example>

```javascript
import * as fs from "fs";

// Copy and overwrite destination if it exists
fs.copyFile(__dirname + "\\config.json", __dirname + "\\config.backup.json");

// Copy only if destination does not exist
const ok = fs.copyFile(__dirname + "\\defaults.json", __dirname + "\\config.json", false);
if (!ok) {
  console.log("config.json already exists — skipped");
}
```

</template>
</MethodBox>

---

<MethodBox
  name="fs.stat(path)"
  badge="fs"
  badgeType="core"
  returns="object | null"
  :parameters="[
    { name: 'path', type: 'string', description: 'File or directory path to inspect.' }
  ]"
>

Returns a metadata object for the given path, or `null` if the path does not exist.

The returned object has these properties:

| Property | Type | Description |
|---|---|---|
| `isFile` | `boolean` | `true` when path is a regular file. |
| `isDirectory` | `boolean` | `true` when path is a directory. |
| `isSymlink` | `boolean` | `true` when path is a symbolic link. |
| `size` | `number` | File size in bytes. `0` for directories. |
| `mode` | `number` | Native permission/mode value. |

<template #example>

```javascript
import * as fs from "fs";

const info = fs.stat(__dirname + "\\config.json");
if (info === null) {
  console.warn("File not found");
} else {
  console.log("isFile:", info.isFile);       // true
  console.log("size:", info.size, "bytes");  // e.g. 512 bytes
}
```

</template>
</MethodBox>

---

## Full Example

A complete walkthrough of every `fs` function:

```javascript
import * as fs from "fs";

const baseDir  = __dirname + "\\tmp";
const nestedDir = baseDir + "\\nested\\child";
const fileA    = baseDir + "\\a.txt";
const fileB    = baseDir + "\\b.txt";
const fileC    = baseDir + "\\c.txt";

// Create nested directories
console.log("mkdir:", fs.mkdir(nestedDir));

// Write and append
fs.writeFile(fileA, "Hello");
fs.writeFile(fileA, " World", true);
console.log("readFile:", fs.readFile(fileA)); // "Hello World"

// Copy, rename
fs.copyFile(fileA, fileB);
fs.rename(fileB, fileC);

// List directory
console.log("readdir:", JSON.stringify(fs.readdir(baseDir)));

// Inspect metadata
const info = fs.stat(fileA);
console.log("stat size:", info.size);

// Check existence
console.log("exists c:", fs.exists(fileC)); // true

// Remove files
fs.unlink(fileA);
fs.unlink(fileC);
```
