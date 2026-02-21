---
title: Require modules from main scripts.
---

# Require Method
CommonJS-style module import for Novadesk main scripts.

#### Table of Contents
[[toc]]

## `require(modulePath)`

Loads and executes a module, returning its `module.exports`.

::: warning
`require` is only available in the Main script (`index.js`). UI scripts do not have access to `require`.
:::

### Parameters

- **`modulePath`**
  - **Type**: `string`
  - **Description**: Module path. Relative paths resolve from the requiring file’s directory. Adds `.js` when missing.

### Return Value

- **Type**: `any`
  - **Description**: The value exported by the required module.

### Example

```javascript
// index.js (Main script)
const math = require("./lib/math");
console.log("Sum:", math.add(2, 3));
```

```javascript
// lib/math.js
exports.add = function(a, b) {
  return a + b;
};
```

::: info
- Modules are cached after the first load; subsequent `require()` calls return the cached `module.exports`.
:::
