---
title: Load and manage native C++ addons with the addon module.
---

# addon

The `addon` object lets you load and manage native C++ addons (DLLs) at runtime. Use it to extend Novadesk with performance-critical or platform-specific native code.

`addon` is exported from the `novadesk` module.

```javascript
import { addon } from 'novadesk';
```

#### Table of Contents
[[toc]]

## `addon.load(path)`

Loads a native addon DLL into the Novadesk runtime. If the addon is already loaded, the existing addon ID is returned without reloading.

The DLL must export a `NovadeskAddonInit` function. An optional `NovadeskAddonUnload` export is called during cleanup.

### Parameters

- **`path`** (`string`): Path to the `.dll` file. Relative paths are resolved from the entry script directory.

### Return Value

- **Type**: `number | null`
- **Description**: A numeric addon ID on success, or `null` if the DLL could not be loaded or is missing the required `NovadeskAddonInit` export.

### Example

```javascript
import { addon } from 'novadesk';

const id = addon.load("./my_addon.dll");
if (id !== null) {
  console.log("Addon loaded, id:", id);
}
```

## `addon.unload(id)`

Unloads a previously loaded native addon by its ID. Calls the addon’s `NovadeskAddonUnload` export (if present), removes all registered functions, and frees the DLL.

### Parameters

- **`id`** (`number`): The addon ID returned by `addon.load()`.

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the addon was found and unloaded; `false` if no addon with that ID exists.

### Example

```javascript
import { addon } from 'novadesk';

const id = addon.load("./my_addon.dll");

// ... use the addon ...

const ok = addon.unload(id);
console.log("Unloaded:", ok);
```

::: tip
Looking to build your own native addon? See the [Addon SDK Developer Guide](/developers/api/addon-api).
:::