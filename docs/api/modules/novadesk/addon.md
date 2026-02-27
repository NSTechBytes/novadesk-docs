---
title: Load and manage native C++ addons with the addon module.
---

# addon Module
The addon module lets you load and manage native C++ addons from JavaScript. Use it to extend Novadesk with performance-critical or platform-specific native code.

The addon module can be accessed via `require("addon")`.

```javascript
const addon = require("addon");
```

#### Table of Contents
[[toc]]

## `addon.load(path)`

Loads a native addon DLL into the Novadesk environment.

### Parameters

- **`path`**
  - **Type**: `string`
  - **Description**: Path to the `.dll` file (relative or absolute).

### Return Value

- **Type**: `object | null`
- **Description**: The exported API object on success, or `null` if the addon fails to load or initialize.

## `addon.unload(path)`

Unloads a previously loaded native addon, releasing native resources and invoking optional cleanup code.

### Parameters

- **`path`**
  - **Type**: `string`
  - **Description**: The same DLL path that was used with `load()`.

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the addon was unloaded successfully; `false` otherwise.

## Example

```javascript
const addon = require("addon");

const myAddon = addon.load("./utils_addon.dll");

if (myAddon) {
    console.log("Addon version:", myAddon.version);
    const result = myAddon.calculate(10, 20);
    console.log("Result:", result);
    addon.unload("./utils_addon.dll");
}
```

::: tip
Looking to build your own native addon? See the [Addon SDK Developer Guide](/developers/api/addon-api).
:::
