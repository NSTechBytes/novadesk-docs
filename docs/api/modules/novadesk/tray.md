---
title: Create and control a system tray icon with the tray class.
---

# tray

Create and control a Windows system tray icon with a tooltip, context menu, and event handlers.

```javascript
import { tray } from "novadesk";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

::: tip
Always store the tray instance in a variable. If the reference is garbage-collected, the tray icon disappears.
:::

#### Table of Contents
[[toc]]

---

## Constructor

<MethodBox
  name="new tray([image])"
  badge="tray"
  badgeType="core"
  :parameters="[
    { name: 'image', type: 'string', optional: true, description: 'Path to an .ico file. Relative paths resolve from the entry script directory. Can be set later with setImage().' }
  ]"
>

Creates a new system tray icon. The icon is shown immediately. Use a `.ico` file for best rendering on Windows.

<template #example>

```javascript
import { tray } from "novadesk";

const appTray = new tray(__dirname + "\\assets\\icon.ico");
appTray.setToolTip("My Widget");
```

</template>
</MethodBox>

---

## Methods

<MethodBox
  name="tray.setImage(image)"
  badge="tray"
  badgeType="core"
  :parameters="[
    { name: 'image', type: 'string', description: 'Path to the new .ico file.' }
  ]"
>

Updates the tray icon image at runtime.

<template #example>

```javascript
appTray.setImage(__dirname + "\\assets\\icon-active.ico");
```

</template>
</MethodBox>

---

<MethodBox
  name="tray.setToolTip(text)"
  badge="tray"
  badgeType="core"
  :parameters="[
    { name: 'text', type: 'string', description: 'Tooltip text shown on hover.' }
  ]"
>

Sets the tooltip text shown when hovering over the tray icon.

<template #example>

```javascript
appTray.setToolTip("My Widget — Running");
```

</template>
</MethodBox>

---

<MethodBox
  name="tray.setContextMenu(items)"
  badge="tray"
  badgeType="core"
  :parameters="[
    { name: 'items', type: 'object[]', description: 'Array of menu item definitions. See structure below.' }
  ]"
>

Sets the right-click context menu for the tray icon. Replaces any existing menu.

**Menu item properties:**

| Property | Type | Description |
|---|---|---|
| `text` | `string` | Label text for the menu item. |
| `action` | `function` | Callback invoked when the item is clicked. |
| `type` | `string` | Set to `"separator"` to insert a divider. |
| `checked` | `boolean` | Adds a checkmark to the item when `true`. |
| `items` | `object[]` | Nested sub-menu items. |

<template #example>

```javascript
appTray.setContextMenu([
  { text: "Open", action: () => win.show() },
  {
    text: "Settings",
    items: [
      { text: "Theme", checked: true, action: () => console.log("theme") },
    ]
  },
  { type: "separator" },
  { text: "Exit", action: () => app.exit() }
]);
```

</template>
</MethodBox>

---

<MethodBox
  name="tray.on(event, handler)"
  badge="tray"
  badgeType="core"
  :parameters="[
    { name: 'event', type: 'string', description: 'Event name. See supported events below.' },
    { name: 'handler', type: 'function', description: 'Callback invoked when the event fires.' }
  ]"
>

Registers an event listener on the tray icon.

**Supported events:**

| Event | Trigger |
|---|---|
| `click` | Left mouse button released on the tray icon. |
| `right-click` | Right mouse button released on the tray icon. |
| `double-click` | Left mouse button double-clicked on the tray icon. |
| `scroll-up` | Mouse wheel scrolled up over the tray icon. |
| `scroll-down` | Mouse wheel scrolled down over the tray icon. |

<template #example>

```javascript
appTray.on("click", () => {
  win.show();
});

appTray.on("double-click", () => {
  console.log("Double-clicked");
});

appTray.on("scroll-up", () => {
  audio.setVolume(Math.min(100, audio.getVolume() + 5));
});
```

</template>
</MethodBox>

---

<MethodBox
  name="tray.destroy()"
  badge="tray"
  badgeType="core"
>

Removes the tray icon and clears all event handlers. After calling this, the tray instance is no longer active.

<template #example>

```javascript
appTray.destroy();
```

</template>
</MethodBox>

---

## Full Example

```javascript
import { tray, app } from "novadesk";
import { widgetWindow } from "novadesk";

const win = new widgetWindow({
  id: "demo",
  width: 400,
  height: 300,
  script: "ui.js",
  backgroundColor: "rgb(10,10,10)"
});

const appTray = new tray(__dirname + "\\assets\\icon.ico");
appTray.setToolTip("My Widget");

appTray.setContextMenu([
  { text: "Show", action: () => win.show() },
  { text: "Hide", action: () => win.hide() },
  { type: "separator" },
  { text: "Exit", action: () => app.exit() }
]);

appTray.on("click", () => win.show());
```
