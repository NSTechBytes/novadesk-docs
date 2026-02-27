---
title: Global variables available in Novadesk scripts.
---

# Global Variables

Novadesk injects several global variables into every script. Some are shared between Main and UI scripts, while others are context-specific.

#### Table of Contents
[[toc]]

## `__dirname`

- **Type**: `string`
- **Available in**: Main script, UI script

The absolute path to the directory containing the current script file.

### Example

```javascript
const iconPath = path.join(__dirname, "assets", "icon.png");
console.log(iconPath);
```

## `__filename`

- **Type**: `string`
- **Available in**: Main script, UI script

The absolute path to the current script file.

### Example

```javascript
console.log("Running:", __filename);
console.log("Directory:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));
```

## `path`

- **Type**: `object`
- **Available in**: Main script

File-path utility object (similar to Node.js `path` module). Provides `join`, `basename`, `dirname`, `extname`, `isAbsolute`, `normalize`, `relative`, `parse`, and `format`.

See [Path](/api/path) for full documentation.

## `console`

- **Type**: `object`
- **Available in**: Main script, UI script

Logging object with `log`, `info`, `warn`, `error`, and `debug` methods. A global `print()` alias for `console.log()` is also available.

See [Console](/api/console) for full documentation.

## `ipcMain`

- **Type**: `object`
- **Available in**: Main script only

Inter-process communication object for the Main script. See [IPC](/api/ipc) for full documentation.

## `ipcRenderer`

- **Type**: `object`
- **Available in**: UI script only

Inter-process communication object for UI scripts. See [IPC](/api/ipc) for full documentation.

## `ui`

- **Type**: `object`
- **Available in**: UI script only

The widget UI bridge for adding and updating elements. See [UI Elements](/api/win/win-object) for full documentation.

---

## Mouse Event Object

Widget event callbacks and element mouse actions receive an event object with the following properties:

### `clientX`, `clientY`

- **Type**: `number`

Mouse cursor coordinates in the widget's client space.

### `screenX`, `screenY`

- **Type**: `number`

Mouse cursor coordinates in screen space.

### `offsetX`, `offsetY`

- **Type**: `number`

Position relative to the target area. For widget-level events this is relative to the widget client area; for element callbacks it is relative to the element.

### `offsetXPercent`, `offsetYPercent`

- **Type**: `number`
- **Range**: Typically `0`–`100`; may exceed bounds during `mouseLeave`.

Percentage-based offset within the target area.

### `widgetId`

- **Type**: `string`

The ID of the widget that received the event.

### Example

:::tabs
== index.js
```javascript
import { widgetWindow } from 'novadesk';

const win = new widgetWindow({
  id: "demo",
  width: 300,
  height: 200,
  script: "ui.js",
  backgroundColor: "rgb(10,10,10)"
});

win.on("mouseMove", (e) => {
  console.log("client:", e.clientX, e.clientY);
  console.log("screen:", e.screenX, e.screenY);
  console.log("offset:", e.offsetX, e.offsetY);
});
```
== ui.js
```javascript
ui.addShape({
  id: "box",
  shapeType: "rectangle",
  x: 16, y: 16,
  width: 260, height: 90,
  fillColor: "rgba(35,35,35,220)",
  onMouseOver: (e) => {
    console.log("hover:", e.clientX, e.clientY);
  },
  onMouseLeave: () => {
    console.log("left");
  }
});
```
:::