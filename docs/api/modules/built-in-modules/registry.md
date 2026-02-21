---
title: Read and write Windows Registry keys with the registry module.
---

# registry Module
Access Windows Registry values in Novadesk through the registry module.

The registry module can be accessed using `require("registry")`.

```javascript
const registry = require("registry");
```

#### Table of Contents
[[toc]]

## `registry.readRegistry(path, valueName)`

Reads a value from the Windows Registry.

### Parameters

- **`path`**
  - **Type**: `string`
  - **Description**: Full path to the registry key (`HKCU\\`, `HKLM\\`, `HKCR\\`, or `HKU\\`).
  - **Example**: `HKCU\\Software\\Novadesk`

- **`valueName`**
  - **Type**: `string`
  - **Description**: Name of the value to read. Use an empty string for the default value.

### Return Value

- **Type**: `string | number | null`
- **Description**: Value data (`REG_SZ`, `REG_EXPAND_SZ`, `REG_DWORD`). Returns `null` if the key/value does not exist.

## `registry.writeRegistry(path, valueName, data)`

Writes a value to the Windows Registry, creating the key if needed.

### Parameters

- **`path`**, **`valueName`**
  - Same as `readRegistry`.

- **`data`**
  - **Type**: `string | number`
  - **Description**: Strings written as `REG_SZ`, numbers as `REG_DWORD`.

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the operation succeeded.

## Example

```javascript
const registry = require("registry");
var value = registry.readRegistry("HKCU\\Software\\Novadesk", "theme");
console.log("Theme:", value);

var written = registry.writeRegistry("HKCU\\Software\\Novadesk", "theme", "dark");
console.log("Write successful:", written);
```
