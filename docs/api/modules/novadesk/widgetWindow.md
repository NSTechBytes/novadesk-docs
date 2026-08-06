---
title: Create and manage widget windows with widgetWindow
---

# widgetWindow

Create desktop widget windows. Each window hosts a UI script and supports drag, snap, transparency, context menus, and events.

```javascript
import { widgetWindow } from "novadesk";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

## Constructor

<MethodBox
  name="new widgetWindow(options)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'options', type: 'object', description: 'Window configuration object. See options table below.' }
  ]"
>

Creates and displays a new desktop widget window.

**Options:**

| Option | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | `""` | Unique identifier. Saved position/size are loaded by this ID. |
| `width` | `number` | — | Window width in pixels. |
| `height` | `number` | — | Window height in pixels. |
| `x` | `number` | — | Horizontal screen position. |
| `y` | `number` | — | Vertical screen position. |
| `script` | `string` | — | Path to the UI script, relative to the entry script. |
| `backgroundColor` | `string` | `"rgba(0,0,0,0)"` | Background color or gradient. |
| `windowOpacity` | `number` | `255` | Master window opacity (`0`–`255`). |
| `draggable` | `boolean` | `true` | Allow the user to drag the window. |
| `clickThrough` | `boolean` | `false` | Mouse events pass through the window. |
| `keepOnScreen` | `boolean` | `false` | Prevent dragging off-screen. |
| `snapEdges` | `boolean` | `true` | Snap to screen edges and other widgets while dragging. |
| `showInToolbar` | `boolean` | `false` | Show in the Windows taskbar. |
| `toolbarIcon` | `string` | `""` | Path to the taskbar icon. |
| `toolbarTitle` | `string` | `""` | Custom taskbar title. |
| `show` | `boolean` | `true` | Show window immediately after creation. |
| `zPos` | `string` | `"normal"` | Z-order position (see values below). |

**`zPos` values:**

| Value | Behavior |
|---|---|
| `ontopmost` | Always on top of everything, visible over the desktop. |
| `ontop` | Above normal windows, visible over the desktop. |
| `normal` | Normal stacking order, visible over the desktop. |
| `onbottom` | Behind all app windows, hidden when showing the desktop. |
| `ondesktop` | Visible over the desktop, static z-order — ideal for wallpaper-style widgets. |

<template #example>

```javascript
import { widgetWindow } from "novadesk";

const win = new widgetWindow({
  id: "my-widget",
  width: 400,
  height: 300,
  script: "ui.js",
  backgroundColor: "rgb(10,10,10)",
  snapEdges: true,
  showInToolbar: true,
  toolbarTitle: "My Widget",
});
```

</template>
</MethodBox>

---

## Window Methods

<MethodBox
  name="win.setProperties(options)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'options', type: 'object', description: 'Partial options object. Accepts the same keys as the constructor.' }
  ]"
>

Updates one or more window properties at runtime. Only the provided keys are changed.

<template #example>

```javascript
win.setProperties({ width: 600, height: 400 });
win.setProperties({ backgroundColor: "rgb(30,30,30)", draggable: false });
```

</template>
</MethodBox>

---

<MethodBox
  name="win.getProperties()"
  badge="widgetWindow"
  badgeType="core"
  returns="object"
>
<template #returns>An object containing all current window properties: <code>id</code>, <code>x</code>, <code>y</code>, <code>width</code>, <code>height</code>, <code>draggable</code>, <code>clickThrough</code>, <code>keepOnScreen</code>, <code>snapEdges</code>, <code>showInToolbar</code>, <code>toolbarIcon</code>, <code>toolbarTitle</code>, <code>show</code>, <code>windowOpacity</code>, <code>backgroundColor</code>, <code>zPos</code>, <code>script</code>.</template>

Returns the current state of all window properties.

<template #example>

```javascript
const props = win.getProperties();
console.log("Position:", props.x, props.y);
console.log("Size:", props.width, "x", props.height);
```

</template>
</MethodBox>

---

<MethodBox
  name="win.show()"
  badge="widgetWindow"
  badgeType="core"
  returns="widgetWindow"
>
<template #returns>The widget instance (chainable).</template>

Shows the widget window. Triggers the `show` event.

<template #example>

```javascript
win.show();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.hide()"
  badge="widgetWindow"
  badgeType="core"
  returns="widgetWindow"
>
<template #returns>The widget instance (chainable).</template>

Hides the widget window. Triggers the `hide` event.

<template #example>

```javascript
win.hide();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.close()"
  badge="widgetWindow"
  badgeType="core"
>

Destroys the widget window and releases resources. Triggers the `close` and `closed` events.

<template #example>

```javascript
win.close();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.destroy()"
  badge="widgetWindow"
  badgeType="core"
>

Destroys the widget window immediately without triggering the `close` event.

<template #example>

```javascript
win.destroy();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.isVisible()"
  badge="widgetWindow"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> if the window is currently visible.</template>

Returns whether the window is visible.

<template #example>

```javascript
if (!win.isVisible()) win.show();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.isFocused()"
  badge="widgetWindow"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> if the window currently has keyboard focus.</template>

Returns whether the window has keyboard focus.

<template #example>

```javascript
console.log("Focused:", win.isFocused());
```

</template>
</MethodBox>

---

<MethodBox
  name="win.isDestroyed()"
  badge="widgetWindow"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> if the window has been destroyed.</template>

Returns whether the window has been destroyed. Always check this before calling methods on a window that may have been closed.

<template #example>

```javascript
if (!win.isDestroyed()) win.setProperties({ width: 500 });
```

</template>
</MethodBox>

---

<MethodBox
  name="win.setBounds(bounds)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'bounds', type: 'object', description: 'Object with optional x, y, width, height properties.' }
  ]"
>

Sets the position and/or size of the window. Only provided keys are applied.

<template #example>

```javascript
win.setBounds({ x: 100, y: 100, width: 500, height: 400 });
win.setBounds({ width: 600 }); // Only change width
```

</template>
</MethodBox>

---

<MethodBox
  name="win.getBounds()"
  badge="widgetWindow"
  badgeType="core"
  returns="object"
>
<template #returns>An object with <code>x</code>, <code>y</code>, <code>width</code>, and <code>height</code>.</template>

Returns the current position and size of the window.

<template #example>

```javascript
const b = win.getBounds();
console.log("At:", b.x, b.y, "Size:", b.width, "x", b.height);
```

</template>
</MethodBox>

---

<MethodBox
  name="win.setSize(width, height)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'width', type: 'number', description: 'New width in pixels.' },
    { name: 'height', type: 'number', description: 'New height in pixels.' }
  ]"
>

Sets the window size.

<template #example>

```javascript
win.setSize(800, 600);
```

</template>
</MethodBox>

---

<MethodBox
  name="win.getSize()"
  badge="widgetWindow"
  badgeType="core"
  returns="object"
>
<template #returns>An object with <code>width</code> and <code>height</code>.</template>

Returns the current window size.

<template #example>

```javascript
const { width, height } = win.getSize();
console.log(width, "x", height);
```

</template>
</MethodBox>

---

<MethodBox
  name="win.setBackgroundColor(color)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'color', type: 'string', description: 'CSS-style color string, e.g. rgb(10,10,10) or rgba(0,0,0,128).' }
  ]"
>

Sets the window background color.

<template #example>

```javascript
win.setBackgroundColor("rgba(20, 20, 30, 200)");
```

</template>
</MethodBox>

---

<MethodBox
  name="win.getBackgroundColor()"
  badge="widgetWindow"
  badgeType="core"
  returns="string"
>
<template #returns>The current background color string.</template>

Returns the current background color.

<template #example>

```javascript
console.log("BG:", win.getBackgroundColor());
```

</template>
</MethodBox>

---

<MethodBox
  name="win.setOpacity(value)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'value', type: 'number', description: 'Opacity as 0–1 (e.g. 0.5), 0–100 (e.g. 50), or 0–255 (e.g. 128).' }
  ]"
>

Sets the window opacity. All three common ranges are accepted and normalised automatically.

<template #example>

```javascript
win.setOpacity(0.75); // 75% opaque
win.setOpacity(50);   // also 50% opaque
```

</template>
</MethodBox>

---

<MethodBox
  name="win.refresh()"
  badge="widgetWindow"
  badgeType="core"
>

Clears all UI elements and re-executes the widget UI script. Stale `ipcRenderer` listeners from the previous UI instance are cleaned up automatically.

<template #example>

```javascript
win.refresh();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.setFocus()"
  badge="widgetWindow"
  badgeType="core"
>

Gives keyboard focus to the widget window.

<template #example>

```javascript
win.setFocus();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.unFocus()"
  badge="widgetWindow"
  badgeType="core"
>

Removes keyboard focus from the widget window.

<template #example>

```javascript
win.unFocus();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.minimize()"
  badge="widgetWindow"
  badgeType="core"
>

Minimizes the widget window. Triggers the `minimize` event.

<template #example>

```javascript
win.minimize();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.unMinimize()"
  badge="widgetWindow"
  badgeType="core"
>

Restores a minimized widget window. Triggers the `unMinimize` event.

<template #example>

```javascript
win.unMinimize();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.getHandle()"
  badge="widgetWindow"
  badgeType="core"
  returns="number"
>
<template #returns>The native Windows <code>HWND</code> as a number.</template>

Returns the native window handle. Primarily useful for native addon interop.

<template #example>

```javascript
const hwnd = win.getHandle();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.getInternalPointer()"
  badge="widgetWindow"
  badgeType="core"
  returns="number"
>
<template #returns>The internal native Widget pointer as a number.</template>

Returns the internal Widget pointer. Useful when passing the widget reference to a native addon.

<template #example>

```javascript
const ptr = win.getInternalPointer();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.getTitle()"
  badge="widgetWindow"
  badgeType="core"
  returns="string"
>
<template #returns>The window title string.</template>

Returns the current window title.

<template #example>

```javascript
console.log("Title:", win.getTitle());
```

</template>
</MethodBox>

---

## Context Menu

<MethodBox
  name="win.setContextMenu(items)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'items', type: 'object[]', description: 'Array of menu item definitions. Each item can have text, action, type, checked, and items (sub-menu).' }
  ]"
>

Sets the right-click context menu for the widget. Replaces any previous menu.

**Menu item properties:**

| Property | Type | Description |
|---|---|---|
| `text` | `string` | Label text. |
| `action` | `function` | Click callback. |
| `type` | `string` | `"separator"` to insert a divider. |
| `checked` | `boolean` | Shows a checkmark when `true`. |
| `items` | `object[]` | Nested sub-menu items. |

<template #example>

```javascript
win.setContextMenu([
  { text: "Refresh", action: () => win.refresh() },
  {
    text: "Tools",
    items: [
      { text: "Debug", checked: false, action: () => app.enableDebugging(true) }
    ]
  },
  { type: "separator" },
  { text: "Close", action: () => win.close() }
]);
```

</template>
</MethodBox>

---

<MethodBox
  name="win.clearContextMenu()"
  badge="widgetWindow"
  badgeType="core"
>

Removes all custom context menu items.

<template #example>

```javascript
win.clearContextMenu();
```

</template>
</MethodBox>

---

<MethodBox
  name="win.disableContextMenu(disable)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'disable', type: 'boolean', description: 'true to disable the right-click menu entirely, false to enable it.' }
  ]"
>

Enables or disables the right-click context menu.

<template #example>

```javascript
win.disableContextMenu(true);  // no right-click menu
win.disableContextMenu(false); // restore menu
```

</template>
</MethodBox>

---

<MethodBox
  name="win.showDefaultContextMenuItems(show)"
  badge="widgetWindow"
  badgeType="core"
  :parameters="[
    { name: 'show', type: 'boolean', description: 'true to show the built-in default menu items, false to hide them.' }
  ]"
>

Controls whether the built-in Novadesk default context menu entries (e.g. Refresh, Close) are shown alongside custom items.

<template #example>

```javascript
win.showDefaultContextMenuItems(false); // custom menu only
```

</template>
</MethodBox>

---

## Events

<MethodBox
  name="win.on(event, callback)"
  badge="widgetWindow"
  badgeType="core"
  returns="widgetWindow"
  :parameters="[
    { name: 'event', type: 'string', description: 'Event name. See supported events table below.' },
    { name: 'callback', type: 'function', description: 'Handler function. Mouse events receive a Mouse Event Object as argument.' }
  ]"
>
<template #returns>The widget instance (chainable).</template>

Registers an event listener on the widget window. Mouse events pass a [Mouse Event Object](/api/global-variables#mouse-event-object) to the callback.

**Supported events:**

| Event | Trigger |
|---|---|
| `show` | Window became visible. |
| `hide` | Window was hidden. |
| `focus` | Window gained keyboard focus. |
| `unFocus` | Window lost keyboard focus. |
| `minimize` | Window was minimized. |
| `unMinimize` | Window was restored from minimized state. |
| `move` | Window position changed. |
| `refresh` | UI script was refreshed. |
| `close` | Window is about to close. |
| `closed` | Window has been destroyed. |
| `mouseOver` | Mouse entered the window area. |
| `mouseLeave` | Mouse left the window area. |
| `mouseMove` | Mouse moved over the window. |
| `mouseDown` | Any mouse button was pressed. |
| `mouseUp` | Any mouse button was released. |
| `click` | Left click released on the window. |
| `right-click` | Right click released on the window. |
| `double-click` | Left button double-clicked on the window. |
| `scroll-up` | Mouse wheel scrolled up. |
| `scroll-down` | Mouse wheel scrolled down. |

<template #example>

```javascript
win.on("click", (e) => {
  console.log("Clicked at:", e.__clientX, e.__clientY);
});

win.on("mouseMove", (e) => {
  console.log("Mouse:", e.__clientX, e.__clientY);
});

win.on("close", () => console.log("Closing..."));
win.on("closed", () => console.log("Destroyed"));
```

</template>
</MethodBox>

---

## Runtime Overrides

When the **Ctrl key** is held down, the widget runtime temporarily overrides some interaction settings:

- Dragging works even when `draggable` is `false`
- Click-through widgets become interactable
- Snap behavior can be bypassed for precise placement

---

## Full Example

:::tabs
== index.js
```javascript
import { widgetWindow, app } from "novadesk";

const win = new widgetWindow({
  id: "demo",
  width: 400,
  height: 300,
  script: "ui.js",
  backgroundColor: "rgb(10,10,10)",
  snapEdges: true,
});

win.on("mouseOver", (e) => {
  console.log("Mouse entered", e.__clientX, e.__clientY);
});

win.setContextMenu([
  { text: "Refresh", action: () => win.refresh() },
  { type: "separator" },
  { text: "Close", action: () => win.close() },
]);
```
== ui.js
```javascript
ui.beginUpdate();

ui.addText({
  id: "title",
  text: "Hello Widget",
  x: 16,
  y: 14,
  width: 260,
  height: 28,
  fontSize: 16,
  fontColor: "rgb(230,230,230)",
});

ui.addShape({
  id: "box",
  shapeType: "rectangle",
  x: 16,
  y: 52,
  width: 260,
  height: 90,
  fillColor: "rgba(35,35,35,220)",
  strokeColor: "rgba(255,255,255,40)",
  strokeWidth: 1,
  backgroundColorRadius: 10,
});

ui.endUpdate();
```
:::
