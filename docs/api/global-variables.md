---
title: Global variables available in Novadesk scripts
---

# Global Variables

Novadesk injects several globals into every script at startup. Some are available in both the Main and UI script; others are context-specific.

::: info Availability
Unless noted otherwise, all globals on this page are available in both the [Main script](/guides/script-types.html#main-script-the-brain) and the [UI script](/guides/script-types.html#ui-script-the-face).
:::

#### Table of Contents
[[toc]]

## Path Globals

<PropertyBox name="__dirname" type="string">

Absolute directory path of the **current** script file.

```javascript
console.log(__dirname);
// "C:\\Users\\me\\Documents\\Novadesk\\Widgets\\my-widget"
```

</PropertyBox>

<PropertyBox name="__filename" type="string">

Absolute path to the **current** script file itself.

```javascript
console.log(__filename);
// "C:\\Users\\me\\Documents\\Novadesk\\Widgets\\my-widget\\index.js"
```

</PropertyBox>

<PropertyBox name="__mainScriptDirPath" type="string">

Absolute directory path of the **entry/main** script file (`index.js`).

In a UI script, `__dirname` points to the UI script's own folder, while `__mainScriptDirPath` always points to the widget root — useful when resolving shared assets from a UI script.

```javascript
// Inside ui.js — resolves an asset relative to the widget root, not the UI script
const iconPath = __mainScriptDirPath + "\\assets\\icon.png";
```

</PropertyBox>

<PropertyBox name="__widgetDir" type="string">

Absolute path to the Widgets root directory (the folder that contains all widgets).

```javascript
console.log(__widgetDir);
// "C:\\Users\\me\\Documents\\Novadesk\\Widgets"
```

</PropertyBox>

<PropertyBox name="__addonsPath" type="string">

Absolute path to the Addons directory where native addon DLLs are stored.

```javascript
console.log(__addonsPath);
// "C:\\Users\\me\\Documents\\Novadesk\\Addons"
```

</PropertyBox>

## Mouse Event Object

Widget window callbacks (e.g. `win.on("mouseMove", ...)`) and UI element mouse handlers (e.g. `onMouseOver`, `onDrag`) receive an event object. Its properties are exposed as underscored keys:

<PropertyBox name="__clientX / __clientY" type="number">

Mouse coordinates in **widget client space** — relative to the top-left corner of the widget window.

```javascript
win.on("mouseMove", (e) => {
  console.log("client:", e.__clientX, e.__clientY);
});
```

</PropertyBox>

<PropertyBox name="__screenX / __screenY" type="number">

Mouse coordinates in **screen space** — absolute pixel position on the display.

```javascript
win.on("click", (e) => {
  console.log("screen:", e.__screenX, e.__screenY);
});
```

</PropertyBox>

<PropertyBox name="__offsetX / __offsetY" type="number">

Mouse offset in pixels **relative to the target element or region** that received the event.

```javascript
ui.addShape({
  id: "box",
  shapeType: "rectangle",
  x: 16, y: 16, width: 260, height: 90,
  fillColor: "rgba(35,35,35,220)",
  onMouseOver: (e) => {
    console.log("offset:", e.__offsetX, e.__offsetY);
  }
});
```

</PropertyBox>

<PropertyBox name="__offsetXPercent / __offsetYPercent" type="number">

Mouse offset as a **percentage** of the target region's width and height. Normally in the range `0–100`, but may go outside this range during `mouseLeave` events as the cursor exits the element bounds.

```javascript
ui.addImage({
  id: "slider",
  path: "./track.png",
  x: 10, y: 10, width: 200, height: 20,
  onDrag: (e) => {
    const pct = Math.max(0, Math.min(100, e.__offsetXPercent));
    console.log("Position:", pct.toFixed(1) + "%");
  }
});
```

</PropertyBox>

## Full Example

:::tabs
== index.js
```javascript
import { widgetWindow } from "novadesk";

const win = new widgetWindow({
  id: "demo",
  width: 300,
  height: 200,
  script: "ui.js",
  backgroundColor: "rgb(10,10,10)"
});

win.on("mouseMove", (e) => {
  console.log("client:", e.__clientX, e.__clientY);
  console.log("screen:", e.__screenX, e.__screenY);
  console.log("offset:", e.__offsetX, e.__offsetY);
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
    console.log("hover:", e.__clientX, e.__clientY);
  },
  onMouseLeave: () => {
    console.log("left");
  }
});
```
:::
