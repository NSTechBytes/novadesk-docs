---
title: Set the desktop wallpaper via the wallpaper module.
---

# wallpaper Module
Sets the desktop wallpaper using the system API.

The wallpaper module can be accessed using `require("wallpaper")`.

```javascript
const wallpaper = require("wallpaper");
```

#### Table of Contents
[[toc]]

## `wallpaper.setWallpaper(imagePath, [style])`

Sets the Windows desktop wallpaper from an image file.

### Parameters

- **`imagePath`**
  - **Type**: `string`
  - **Required**: Yes
  - **Description**: Path to the wallpaper image. Relative paths resolve from the current script directory.

- **`style`**
  - **Type**: `string`
  - **Required**: No
  - **Default**: `"fill"`
  - **Description**: Wallpaper display style.
  - **Valid values**:
    - `"fill"`
    - `"fit"`
    - `"stretch"`
    - `"tile"`
    - `"center"`
    - `"span"`

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the wallpaper was set successfully; `false` otherwise (e.g., invalid path or style).

## Examples

### Default Style

```javascript
const wallpaper = require("wallpaper");
wallpaper.setWallpaper("assets/background.jpg");
```

### Explicit Style

```javascript
const wallpaper = require("wallpaper");
wallpaper.setWallpaper("assets/lakeside.jpg", "fit");
```
