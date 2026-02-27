---
title: Track the cursor using the mouse-monitor module.
---

# mouse-monitor Module
The mouse-monitor module lets you monitor the current mouse cursor position on the screen.

The mouse-monitor module can be accessed using `require("mouse-monitor")`.

```javascript
const mouseMonitor = require("mouse-monitor");
```

#### Table of Contents
[[toc]]

## `new mouseMonitor.mouse()`

Creates a mouse monitor instance.

## `mouse.position()`

Returns the current mouse cursor coordinates.

### Return Value

- **Type**: `Object`
- **Description**: Contains:
  - **`x`** (`number`): X-coordinate of the mouse cursor.
  - **`y`** (`number`): Y-coordinate of the mouse cursor.

## `mouse.destroy()`

Destroys the mouse monitor and frees its resources.

## Example

```javascript
// index.js
const mouseMonitor = require("mouse-monitor");
var mouse = new mouseMonitor.mouse();

var intervalId = setInterval(function () {
    var pos = mouse.position();
    console.log("Mouse Position: X=" + pos.x + ", Y=" + pos.y);
}, 100);

setTimeout(function () {
    clearInterval(intervalId);
    mouse.destroy();
    console.log("Mouse Monitor Destroyed");
}, 5000);
```
