---
title: Programmatically control Novadesk configuration via the app module.
---

# app Module
Programmatically control Novadesk application configuration via the app module.

The app module can be accessed using `require("app")`.

```javascript
const app = require("app");
```

#### Table of Contents
[[toc]]

## Settings
::: info
Settings methods can be called at any time and their values are persisted to `settings.json`. The storage location depends on [Runtime Mode](/guides/runtime-mode).
:::

### `app.saveLogToFile(bool)`

Enables or disables logging to a file (`logs.log`) in the application's AppData directory.

#### Parameters

- **`bool`**
  - **Type**: `boolean`
  - **Description**: `true` to enable file logging, `false` to disable it.

#### Example
```javascript
app.saveLogToFile(true);
```

### `app.enableDebugging(bool)`

Sets the global log level so that debug messages become visible.

#### Parameters

- **`bool`**
  - **Type**: `boolean`
  - **Description**: `true` to enable debug logging, `false` to use standard informational logging.

#### Example
```javascript
app.enableDebugging(true);
console.debug("Detailed diagnostic information");
```

### `app.disableLogging(bool)`

Silences or resumes all logging output (console and file).

#### Parameters

- **`bool`**
  - **Type**: `boolean`
  - **Description**: `true` to silence logs, `false` to resume logging based on other settings.

#### Example
```javascript
app.disableLogging(true);
```

### `app.hideTrayIcon(bool)`

Shows or hides the Novadesk icon in the system tray.

#### Parameters

- **`bool`**
  - **Type**: `boolean`
  - **Description**: `true` to hide the icon, `false` to show it.

#### Example
```javascript
app.hideTrayIcon(true);
```

### `app.useHardwareAcceleration(bool)`

Toggles Direct2D hardware acceleration.

#### Parameters

- **`bool`**
  - **Type**: `boolean`
  - **Description**: `true` to use hardware acceleration (default), `false` to use software rendering.

::: info
Changing this setting requires an **application restart** to take effect.
:::

#### Example
```javascript
app.useHardwareAcceleration(true);
```

## Tray API

### `app.setTrayMenu(items)`

Sets the context menu for the application's system tray icon.

#### Parameters

- **`items`** (`Array<Object>`)
  - **Description**: Each object can include:
    - `text` (`string`)
    - `action` (`function`)
    - `type` (`string`, `"separator"` for dividers)
    - `checked` (`boolean`)
    - `items` (`Array<Object>`) for nested menus

#### Example
```javascript
app.setTrayMenu([
  {
    text: "Open App",
    action: function () {
      console.log("Opening...");
    }
  },
  { type: "separator" },
  {
    text: "Settings",
    items: [
      { text: "Dark Mode", checked: true, action: toggleDark },
      { text: "Launch at Startup", checked: false }
    ]
  },
  { type: "separator" },
  {
    text: "Exit",
    action: function () {
      app.exit();
    }
  }
]);
```

### `app.clearTrayMenu()`

Removes all custom tray menu items.

### `app.showDefaultTrayItems(show)`

Controls visibility of default tray entries.

#### Parameters

- **`show`**
  - **Type**: `boolean`
  - **Description**: `true` to show default items like "Exit", `false` to hide them.

### `app.hideTrayIcon(hide)`

Dynamically hides or shows the tray icon.

#### Parameters

- **`hide`**
  - **Type**: `boolean`
  - **Description**: `true` to hide, `false` to show.

#### Example
```javascript
app.hideTrayIcon(true);
```

## Utility Methods

### `app.exit()`

Exits the Novadesk application.

#### Example
```javascript
app.exit();
```

### `app.refresh()`

Reloads all active widget scripts, useful for programmatically applying updates.

#### Example
```javascript
app.refresh();
```

### `app.getProductVersion()`

Returns the product version defined in the executable metadata.

::: info
Standalone widget applications built with `nwm` report the version specified in `meta.json`.
:::

#### Example
```javascript
const version = app.getProductVersion();
console.log("Product Version:", version);
```

### `app.getFileVersion()`

Returns the core file version from the executable metadata.

::: info
Standalone widget applications built with `nwm` report the value from `meta.json`.
:::

#### Example
```javascript
const fileVersion = app.getFileVersion();
console.log("File Version:", fileVersion);
```

### `app.getNovadeskVersion()`

Returns the original hardcoded Novadesk version. This value is constant even when using `nwm`.

#### Example
```javascript
const novadeskVersion = app.getNovadeskVersion();
console.log("Original Novadesk Version:", novadeskVersion);
```

### `app.getAppDataPath()`

Returns the path to `%APPDATA%\Novadesk\`.

#### Example
```javascript
const appData = app.getAppDataPath();
console.log("AppData Path:", appData);
```

### `app.getSettingsFilePath()`

Returns the absolute path to `settings.json`.

#### Example
```javascript
const settingsPath = app.getSettingsFilePath();
console.log("Settings Path:", settingsPath);
```

### `app.getLogPath()`

Returns the absolute path to the current `logs.log` file.

#### Example
```javascript
const logPath = app.getLogPath();
console.log("Log Path:", logPath);
```

### `app.isPortable()`

Returns `true` when Novadesk runs in portable mode, `false` otherwise.

::: info
Portable mode is detected at runtime based on the executable location and write permissions.
:::

#### Example
```javascript
const isPortable = app.isPortable();
console.log("Is Portable:", isPortable);
```

### `app.isFirstRun()`

Returns `true` when Novadesk runs for the first time (missing/empty settings), `false` afterwards.

#### Example
```javascript
const isFirstRun = app.isFirstRun();
console.log("Is First Run:", isFirstRun);
```
