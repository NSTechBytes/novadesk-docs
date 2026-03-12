---
title: Tray
---

# Tray

Use the `tray` constructor to control the system tray icon, its context menu, and tray events.

```javascript
import { tray } from "novadesk";

const tray = new tray("C:/path/to/icon.ico");
```


## Constructor

### `new tray(image)`
Creates a tray instance. `image` is an optional icon path.

```javascript
const tray = new tray();
const trayWithIcon = new tray("C:/path/to/icon.ico");
```

## Methods

### `tray.setImage(image)`
Updates the tray icon image.

```javascript
tray.setImage("C:/path/to/icon.ico");
```

### `tray.setToolTip(toolTip)`
Sets the tray tooltip text.

```javascript
tray.setToolTip("Novadesk");
```

### `tray.setContextMenu(menu)`
Sets the context menu items for the tray icon.

```javascript
tray.setContextMenu([
  { text: "Open", action: () => console.log("open") },
  { type: "separator" },
  { text: "Exit", action: () => console.log("exit") }
]);
```


## Events

Use `tray.on(event, handler)` to listen for events.

Supported events:
- `click`
- `right-click`

```javascript
tray.on("click", (event) => {
  console.log("Tray clicked", event);
});
```

### `tray.destroy()`
Clears all tray event handlers.
