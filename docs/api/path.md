---
title: File path utilities via the global path object.
---

# Path

The global `path` object provides Windows-aware file-path utilities modelled after the Node.js `path` module. It is always available — no import or `require` needed.

::: info Availability
`path` is injected as a global in both the [Main script](/guides/script-types.html#main-script-the-brain) and the [UI script](/guides/script-types.html#ui-script-the-face). You can use it directly without any import.

```javascript
// No import needed — just use it
const full = path.join(__dirname, "assets", "icon.png");
```
:::

::: tip Working with `__dirname`
`path` pairs naturally with the [`__dirname`](/api/global-variables.html#dirname) global. Use `path.join(__dirname, ...)` to build absolute paths relative to the current script — this is the recommended way to reference local assets and config files.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="path.join(...segments)"
  badge="path"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: '...segments', type: 'string', description: 'One or more path segments to join together.' }
  ]"
>
<template #returns>The joined and normalized path string.</template>

Joins all given path segments using the Windows path separator (`\`) and normalizes the result, collapsing redundant separators and resolving `.` segments.

::: info Relative path resolution
In the **Main script** the result is resolved relative to the widget root directory. In the **UI script** it is resolved relative to the UI script file.
:::

<template #example>

```javascript
path.join(__dirname, "assets", "icon.png");
// "C:\\Users\\me\\Widgets\\my-widget\\assets\\icon.png"

path.join("C:\\Users\\me", ".", "Widgets");
// "C:\\Users\\me\\Widgets"
```

</template>
</MethodBox>

---

<MethodBox
  name="path.basename(filePath [, ext])"
  badge="path"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'filePath', type: 'string', description: 'The full file path to extract the last component from.' },
    { name: 'ext', type: 'string', optional: true, description: 'If provided, strips this extension from the result.' }
  ]"
>
<template #returns>The last path component, with the extension stripped if <code>ext</code> was provided.</template>

Returns the last portion of a path — typically the filename. Optionally removes a trailing extension.

<template #example>

```javascript
path.basename("C:\\Widgets\\my-widget\\ui.js");        // "ui.js"
path.basename("C:\\Widgets\\my-widget\\ui.js", ".js"); // "ui"
path.basename("C:\\Widgets\\my-widget\\");             // "my-widget"
```

</template>
</MethodBox>

---

<MethodBox
  name="path.dirname(filePath)"
  badge="path"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'filePath', type: 'string', description: 'The file path to extract the directory from.' }
  ]"
>
<template #returns>The directory portion of the path, or <code>"."</code> if there is none.</template>

Returns the directory portion of a path — everything up to but not including the last component. Returns `"."` when there is no directory part.

<template #example>

```javascript
path.dirname("C:\\Widgets\\my-widget\\ui.js");
// "C:\\Widgets\\my-widget"

path.dirname("index.js");
// "."
```

</template>
</MethodBox>

---

<MethodBox
  name="path.extname(filePath)"
  badge="path"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'filePath', type: 'string', description: 'The file path to extract the extension from.' }
  ]"
>
<template #returns>The file extension including the leading dot, or an empty string if there is none.</template>

Returns the file extension of the path, including the leading dot. Returns an empty string if there is no extension.

<template #example>

```javascript
path.extname("icon.png");    // ".png"
path.extname("index.html");  // ".html"
path.extname("README");      // ""
path.extname(".gitignore");  // ""
```

</template>
</MethodBox>

---

<MethodBox
  name="path.isAbsolute(filePath)"
  badge="path"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'filePath', type: 'string', description: 'The path string to test.' }
  ]"
>
<template #returns><code>true</code> if the path is absolute, <code>false</code> if it is relative.</template>

Returns `true` if the path is absolute (starts with a drive letter or UNC root), `false` if it is relative.

::: tip
Use this to guard against accidentally passing a relative path where an absolute one is required — for example before calling `fs.readFile`.
:::

<template #example>

```javascript
path.isAbsolute("C:\\Widgets\\ui.js"); // true
path.isAbsolute("\\\\server\\share");  // true
path.isAbsolute("ui.js");              // false
path.isAbsolute("assets\\icon.png");   // false
```

</template>
</MethodBox>

---

<MethodBox
  name="path.normalize(filePath)"
  badge="path"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'filePath', type: 'string', description: 'The path to normalize.' }
  ]"
>
<template #returns>The normalized path, or <code>"."</code> if the result would be empty.</template>

Normalizes a path by resolving `..` and `.` segments, removing redundant separators, and standardizing to backslashes. Returns `"."` if the result would be empty.

<template #example>

```javascript
path.normalize("C:\\Users\\me\\..\\Desktop\\.\\widget.js");
// "C:\\Users\\Desktop\\widget.js"

path.normalize("assets//images\\\\icon.png");
// "assets\\images\\icon.png"
```

</template>
</MethodBox>

---

<MethodBox
  name="path.relative(from, to)"
  badge="path"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'from', type: 'string', description: 'The starting path (usually a directory).' },
    { name: 'to', type: 'string', description: 'The destination path.' }
  ]"
>
<template #returns>The relative path from <code>from</code> to <code>to</code>.</template>

Returns the relative path from `from` to `to`. Useful when you need a portable path that is relative to a known base.

<template #example>

```javascript
path.relative(__dirname, path.join(__dirname, "assets", "icon.png"));
// "assets\\icon.png"

path.relative("C:\\Widgets\\a", "C:\\Widgets\\b\\ui.js");
// "..\\b\\ui.js"
```

</template>
</MethodBox>

---

<MethodBox
  name="path.parse(filePath)"
  badge="path"
  badgeType="core"
  returns="{ root, dir, base, name, ext }"
  :parameters="[
    { name: 'filePath', type: 'string', description: 'The file path to break into components.' }
  ]"
>
<template #returns>An object with <code>root</code>, <code>dir</code>, <code>base</code>, <code>name</code>, and <code>ext</code> components.</template>

Breaks a path string into its individual components. This is the inverse of `path.format()`.

The returned object has these properties:

| Property | Type | Description |
|---|---|---|
| `root` | `string` | Drive root, e.g. `"C:\\"` |
| `dir` | `string` | Full directory, e.g. `"C:\\Widgets\\my-widget"` |
| `base` | `string` | Filename with extension, e.g. `"index.js"` |
| `name` | `string` | Filename without extension, e.g. `"index"` |
| `ext` | `string` | Extension including dot, e.g. `".js"` |

<template #example>

```javascript
const p = path.parse("C:\\Widgets\\my-widget\\index.js");
// {
//   root: "C:\\",
//   dir:  "C:\\Widgets\\my-widget",
//   base: "index.js",
//   name: "index",
//   ext:  ".js"
// }

console.log(p.name); // "index"
console.log(p.ext);  // ".js"
```

</template>
</MethodBox>

---

<MethodBox
  name="path.format(pathObject)"
  badge="path"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'dir', type: 'string', optional: true, description: 'Directory component.' },
    { name: 'base', type: 'string', optional: true, description: 'Filename with extension. When set, name and ext are ignored.' },
    { name: 'name', type: 'string', optional: true, description: 'Filename without extension. Used when base is not provided.' },
    { name: 'ext', type: 'string', optional: true, description: 'File extension including the dot. Used when base is not provided.' }
  ]"
>
<template #returns>The assembled path string. <code>base</code> takes priority over <code>name</code> + <code>ext</code> when both are present.</template>

Constructs a path string from an object of components. This is the inverse of `path.parse()`.

When both `base` and `name`/`ext` are provided, `base` takes priority and `name`/`ext` are ignored.

<template #example>

```javascript
path.format({ dir: "C:\\Widgets\\my-widget", base: "index.js" });
// "C:\\Widgets\\my-widget\\index.js"

path.format({ dir: "C:\\Widgets\\my-widget", name: "index", ext: ".js" });
// "C:\\Widgets\\my-widget\\index.js"

// Round-trip with parse
const parts = path.parse("C:\\Widgets\\my-widget\\index.js");
parts.base = "";      // clear base so name + ext are used
parts.name = "ui";
path.format(parts);   // "C:\\Widgets\\my-widget\\ui.js"
```

</template>
</MethodBox>
