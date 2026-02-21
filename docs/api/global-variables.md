---
title: Reference Novadesk script global variables.
---

# Global Variables
Standard global variables available to Novadesk scripts help you work with script paths and mouse events.

#### Table of Contents
[[toc]]

## `__dirname`

The absolute path to the directory containing the current script file.

### Example

```javascript
const path = require("path");
var imagePath = path.join(__dirname, "assets", "icon.png");
console.log(imagePath);
```

## `__filename`

The absolute path to the current script file.

## `__widgetsDir`

Absolute path to the currently loaded widget script context.

::: info
At runtime `__widgetsDir` currently matches `__dirname` for the active script.
:::

### Example

```javascript
console.log("Widget Dir:", __widgetsDir);
var iconPath = path.join(__widgetsDir, "assets", "icon.png");
```

## Mouse Event Variables

Variables injected into mouse callback payloads for widget events and element mouse actions.

### `__offsetX`, `__offsetY`

- X/Y position relative to the target area.
- Widget mouse events measure relative to the widget client area.
- Element callbacks measure relative to the element.

### `__offsetXPercent`, `__offsetYPercent`

- **Type**: `number`
- **Range**: Usually `0-100`; can overflow when outside bounds (e.g., `mouseLeave`).

### `__clientX`, `__clientY`

Mouse cursor coordinates in widget client space.

### `__screenX`, `__screenY`

Mouse coordinates in screen space.

### Example

```javascript
widget.on("mouseMove", function (e) {
  console.log("client:", e.__clientX, e.__clientY);
  console.log("screen:", e.__screenX, e.__screenY);
  console.log("offset:", e.__offsetX, e.__offsetY);
});
```
