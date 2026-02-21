---
title: Access the Windows clipboard via the clipper module.
---

# clipper Module
Access the Windows system clipboard in Novadesk. The Clipboard API allows widgets to interact with clipboard contents programmatically.

The clipper module can be accessed using `require("clipper")`.

```javascript
const clipper = require("clipper");
```

#### Table of Contents
[[toc]]

## `clipper.getText()`

Retrieves the current text content of the clipboard.

#### Return Value

- **Type**: `string | null`
- **Description**: The text content of the clipboard, or `null` if the clipboard is empty or does not contain text.

## `clipper.setText(text)`

Sets the text content of the system clipboard.

#### Parameters

- **`text`**
  - **Type**: `string`
  - **Description**: The text to copy to the clipboard.

#### Return Value

- **Type**: `boolean`
- **Description**: `true` if successful.

## Example

```javascript
const clipper = require("clipper");
// Copy text to clipboard
var success = clipper.setText("Copied from Novadesk!");
if (success) {
    console.log("Text copied!");
}

// Read from clipboard
var text = clipper.getText();
console.log("Clipboard contains: " + text);
```
