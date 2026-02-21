---
title: Read and write JSON files with the json module.
---

# json Module
JSON file operations in the Novadesk JavaScript API are handled through the json module.

The json module can be accessed using `require("json")`.

```javascript
const json = require("json");
```

#### Table of Contents
[[toc]]
    
## `json.readData(path)`

Reads and parses a JSON file.

- **`path`**
  - **Type**: `string`
  - **Description**: Path to the JSON file (absolute or relative to the widget script).

### Return Value

- **Type**: `Object | null`
- **Description**: Parsed object if successful; `null` on failure.

## `json.writeData(path, data)`

Serializes a JavaScript object to disk as JSON.

- **`path`**
  - **Type**: `string`
  - **Description**: Path to the target JSON file (absolute or relative).

- **`data`**
  - **Type**: `Object`
  - **Description**: JavaScript object to serialize.

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the file was written successfully; `false` otherwise.

## Examples

### Reading Configuration via Tabs

```tabs
== index.js
```javascript
const json = require("json");
var config = json.readData("config.json");
console.log("Debug:", config.settings.debug);
```
== config.json
```json
{
    "settings": {
        "debug": true
    },
    "background": "dark_blue",
    "opacity": 0.8
}
```
```

**Output**
```text
[TimeStamp] [Novadesk] [LOG] Loaded configuration
[TimeStamp] [Novadesk] [LOG] Debug: true
[TimeStamp] [Novadesk] [LOG] Background: dark_blue
[TimeStamp] [Novadesk] [LOG] Opacity: 0.8
```

### Writing a New JSON File

```javascript
const json = require("json");
var success = json.writeData("settings.json", { theme: "light", volume: 70 });
console.log("Saved settings:", success);
```

### Updating a Single Value

```javascript
const json = require("json");
var current = json.readData("settings.json");
current.volume = 80;
json.writeData("settings.json", current);
```
