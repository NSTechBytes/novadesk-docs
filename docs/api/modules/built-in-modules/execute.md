---
title: Launch programs, files, and URLs with the execute module.
---

# execute Module
Launch external programs, files, or URLs using the Novadesk system API.

The execute module can be accessed using `require("execute")`.

```javascript
const execute = require("execute");
```

#### Table of Contents
[[toc]]

## `execute.execute(target, [parameters], [workingDir], [show])`

Launches an external application, opens a file, or opens a URL in the default browser.

### Parameters

- **`target`**
  - **Type**: `string`
  - **Description**: Path to the executable, file, or URL.

- **`parameters`**
  - **Type**: `string`
  - **Description**: Command-line arguments passed to the target; only used for executables.

- **`workingDir`**
  - **Type**: `string`
  - **Description**: Directory in which the command should be executed.

- **`show`**
  - **Type**: `string | number`
  - **Default**: `"normal"`
  - **Description**: Controls how the window is displayed.
  - **Valid string values**:
    - `"hide"`
    - `"normal"`
    - `"minimized"`
    - `"maximized"`

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the command was successfully initiated, `false` otherwise.

## Examples

### Launch an Application

```javascript
const execute = require("execute");
execute.execute("C:\\Program Files\\App\\app.exe");
```

### Open a URL

```javascript
const execute = require("execute");
execute.execute("https://novadesk.example.com");
```

### Run a Command with Parameters

```javascript
const execute = require("execute");
execute.execute("cmd.exe", "/c echo Hello");
```
