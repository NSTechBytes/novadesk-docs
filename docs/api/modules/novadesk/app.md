---
title: Control the Novadesk application via the app object
---

# app

The `app` object provides methods to control the Novadesk application: reloading scripts, exiting, managing the system tray, and querying version info.

`app` is exported from the `novadesk` module.

```javascript
import { app } from 'novadesk';
```

#### Table of Contents
[[toc]]

## Lifecycle

### `app.reload()`

Reloads all active widget scripts.

#### Example

```javascript
app.reload();
```

### `app.exit()`

Exits the Novadesk application.

#### Example

```javascript
app.exit();
```

## Tray

### `app.setTrayMenu(items)`

Sets the context menu for the system tray icon. Replaces any previously set menu.

#### Parameters

- **`items`** (`Array<object>`): Menu item definitions. Each object can include:
  - **`text`** (`string`): Label shown in the menu.
  - **`action`** (`function`): Callback invoked when the item is clicked.
  - **`type`** (`string`): Set to `"separator"` to insert a divider.
  - **`checked`** (`boolean`): Whether the item appears checked.
  - **`items`** (`Array<object>`): Nested sub-menu items.

#### Example

```javascript
app.setTrayMenu([
  { text: "Reload", action: () => app.reload() },
  { type: "separator" },
  {
    text: "Tools",
    items: [
      { text: "Debug Mode", checked: false, action: () => console.log("toggle") }
    ]
  },
  { type: "separator" },
  { text: "Exit", action: () => app.exit() }
]);
```

### `app.clearTrayMenu()`

Removes all custom tray menu items.

### `app.showDefaultTrayItems(show)`

Controls visibility of the built-in default tray entries (e.g. "Exit").

#### Parameters

- **`show`** (`boolean`): `true` to show default items, `false` to hide them.

#### Example

```javascript
app.showDefaultTrayItems(true);
```

### `app.hideTrayIcon(hide)`

Shows or hides the Novadesk system tray icon. The setting is persisted.

#### Parameters

- **`hide`** (`boolean`): `true` to hide the icon, `false` to show it.

#### Example

```javascript
app.hideTrayIcon(false);
```

## Version Info

### `app.getProductVersion()`

Returns the product version from the executable metadata.

#### Return Value

- **Type**: `string`

::: info
Standalone widget applications built with `nwm` report the version from `meta.json`.
:::

#### Example

```javascript
console.log("Product version:", app.getProductVersion());
```

### `app.getFileVersion()`

Returns the file version from the executable metadata.

#### Return Value

- **Type**: `string`

::: info
Standalone widget applications built with `nwm` report the value from `meta.json`.
:::

#### Example

```javascript
console.log("File version:", app.getFileVersion());
```

### `app.getNovadeskVersion()`

Returns the hardcoded Novadesk engine version. This value is constant regardless of `nwm` packaging.

#### Return Value

- **Type**: `string`

#### Example

```javascript
console.log("Novadesk version:", app.getNovadeskVersion());
```
