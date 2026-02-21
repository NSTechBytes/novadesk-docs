---
title: Fetch web or local data asynchronously with the web-fetch module.
---

# web-fetch Module
Asynchronously fetch data from the web or local files in Novadesk.

The web-fetch module can be accessed using `require("web-fetch")`.

```javascript
const webFetch = require("web-fetch");
```

#### Table of Contents
[[toc]]

## `webFetch.fetch(url, callback)`

Initiates an asynchronous fetch request.

### Parameters

- **`url`**
  - **Type**: `string`
  - **Description**: Source to fetch from:
    - Web URLs must start with `http://` or `https://`.
    - Local files can use relative paths (e.g., `data.txt`) or `file://` URIs (e.g., `file://C:/config.json`).

- **`callback`**
  - **Type**: `function(data)`
  - **Description**: Called when the fetch completes.
    - **`data`**: Raw string content from the source. `null` if the operation fails.

## Examples

### 1. Fetching a Webpage Title

```javascript
const webFetch = require("web-fetch");
webFetch.fetch("https://example.com", function (data) {
    if (data) {
        var title = data.match(/<title>(.*?)<\\/title>/i);
        console.log("Page title:", title ? title[1] : "unknown");
    } else {
        console.log("Failed to fetch webpage");
    }
});
```

### 2. Fetching and Parsing JSON

```javascript
const webFetch = require("web-fetch");
webFetch.fetch("https://api.example.com/status", function (data) {
    if (data) {
        var parsed = JSON.parse(data);
        console.log("Status:", parsed.status);
    }
});
```

### 3. Reading a Local File

```javascript
const webFetch = require("web-fetch");
webFetch.fetch("local-config.txt", function (data) {
    if (data) {
        console.log("Local file contents:", data);
    }
});
```
