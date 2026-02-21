---
title: Manage display brightness with the brightness module.
---

# brightness Module
Get and set display brightness using the system API.

The brightness module can be accessed using `require("brightness")`.

```javascript
const brightness = require("brightness");
```

#### Table of Contents
[[toc]]

## `brightness.getBrightness([options])`

Returns brightness information for a display.

#### Parameters

- **`options`**
  - **Type**: `Object`
  - **Required**: No
  - **Description**: Optional query options.

- **`display`**
  - **Type**: `number`
  - **Default**: `0`
  - **Description**: Display index to query.

#### Return Value

- **Type**: `Object`
- **Description**: Brightness details:
  - **`supported`** (`boolean`): Whether brightness control is supported.
  - **`current`** (`number`): Current raw brightness value.
  - **`min`** (`number`): Minimum raw brightness value.
  - **`max`** (`number`): Maximum raw brightness value.
  - **`percent`** (`number`): Normalized brightness percentage (`0-100`).

## `brightness.setBrightness(options)`

Sets the brightness for a display.

#### Parameters

- **`options`**
  - **Type**: `Object`
  - **Required**: Yes
  - **Description**: Brightness options.

- **`display`**
  - **Type**: `number`
  - **Default**: `0`
  - **Description**: Display index to target.

- **`percent`**
  - **Type**: `number`
  - **Required**: Yes
  - **Description**: Target brightness percentage. Values are clamped to `0-100`.

#### Return Value

- **Type**: `boolean`
- **Description**: `true` if brightness was updated successfully; otherwise `false`.

## Example

```javascript
const brightness = require("brightness");
var info = brightness.getBrightness({ display: 0 });
console.log("Brightness supported:", info.supported);
console.log("Brightness percent:", info.percent);

// Set brightness to 60%
var ok = brightness.setBrightness({ display: 0, percent: 60 });
console.log("Set brightness:", ok);
```
