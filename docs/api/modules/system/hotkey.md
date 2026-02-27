---
title: Register and manage global hotkeys via the hotkeys module.
---

# hotkeys Module
Register and manage global hotkeys in Novadesk to control widgets and applications from anywhere on the system.

The hotkeys module can be accessed using `require("hotkeys")`.

```javascript
const hotkeys = require("hotkeys");
```

#### Table of Contents
[[toc]]

## `hotkeys.registerHotkey(hotkey, callback)`

Registers a global hotkey and binds it to a callback handler.

### Parameters

- **`hotkey`**
  - **Type**: `string`
  - **Description**: The key combination to register (e.g., `"Ctrl+Alt+R"`, `"Win+D"`, `"Space"`).

- **`callback`**
  - **Type**: `function | Object`
  - **Description**: Handler invoked when the hotkey is used.
    - **function**: Executed on key press.
    - **Object**: Optional `onKeyDown` and `onKeyUp` handlers.

### Return Value

- **Type**: `number`
- **Description**: Hotkey ID used to unregister the hotkey later.

## `hotkeys.unregisterHotkey(id)`

Unregisters a previously registered hotkey.

### Parameters

- **`id`**
  - **Type**: `number`
  - **Description**: The identifier returned by `registerHotkey`.

## Supported Keys

### Modifier Keys
- `Ctrl`
- `Alt`
- `Shift`
- `Win`

### Alphanumeric Keys
- Letters: `A-Z`
- Numbers: `0-9`

### Function Keys
- `F1-F12`

### Special Keys
- `Space`
- `Enter`
- `Escape`
- `Tab`
- `Backspace`
- `Delete`
- `Insert`
- `Home`
- `End`
- `PageUp`
- `PageDown`
- `Up`
- `Down`
- `Left`
- `Right`

## Example

```javascript
const hotkeys = require("hotkeys");
var id = hotkeys.registerHotkey("Ctrl+Alt+R", function () {
    console.log("Refresh triggered");
});

// Later, unregister the hotkey
hotkeys.unregisterHotkey(id);
```
