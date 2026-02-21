---
title: Control per-app audio sessions with the app-volume module.
---

# app-volume Module
Control volume and mute state for individual application audio sessions in Novadesk.

The app-volume module can be accessed using `require("app-volume")`.

```javascript
const appVolume = require("app-volume");
```

#### Table of Contents
[[toc]]

## App Selector

Per-app methods use a selector object. Provide either `pid` or `process`.

- **`pid`** (`number`): Process ID  
- **`process`** (`string`): Process name (e.g., `"chrome.exe"`)

## `appVolume.listAppVolumes()`

Lists active application audio sessions.

### Return Value

- **Type**: `Array<Object>`
- **Description**: Each entry may include:
  - `pid` (`number`)
  - `process` (`string`)
  - `fileName` (`string`)
  - `filePath` (`string`)
  - `iconPath` (`string`)
  - `displayName` (`string`)
  - `volume` (`number`, `0-100`)
  - `peak` (`number`, `0-100`)
  - `muted` (`boolean`)

## `appVolume.getAppVolume(selector)`

Gets the volume of an app session.

### Parameters

- **`selector`**
  - **Type**: `Object`
  - **Description**: App selector (`pid` or `process`).

### Return Value

- **Type**: `number | null`
- **Description**: Volume percentage (`0-100`), or `null` if the session is not found.

## `appVolume.setAppVolume(selector, level)`

Sets the volume for an app session.

### Parameters

- **`selector`**
  - **Type**: `Object`
  - **Description**: App selector (`pid` or `process`).

- **`level`**
  - **Type**: `number`
  - **Description**: Target volume percentage (`0-100`). Values are clamped.

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the session volume changed.

## `appVolume.getAppPeak(selector)`

Gets the current peak level of an app session.

### Parameters

- **`selector`**
  - **Type**: `Object`
  - **Description**: App selector object.

### Return Value

- **Type**: `number | null`
- **Description**: Peak percentage (`0-100`), or `null` if not found.

## `appVolume.getAppMute(selector)`

Gets the mute state of an app session.

### Return Value

- **Type**: `boolean | null`
- **Description**: `true`/`false` mute state, or `null` if session is absent.

## `appVolume.setAppMute(selector, muted)`

Sets the mute state of an app session.

### Parameters

- **`selector`**
  - **Type**: `Object`
  - **Description**: App selector (`pid` or `process`).

- **`muted`**
  - **Type**: `boolean`
  - **Description**: Target mute state.

### Return Value

- **Type**: `boolean`
- **Description**: `true` if the mute state was changed.

## Example

```javascript
const appVolume = require("app-volume");
var sessions = appVolume.listAppVolumes();
console.log("App Sessions:", JSON.stringify(sessions));

var selector = { process: "chrome.exe" };

var current = appVolume.getAppVolume(selector);
console.log("Chrome Volume:", current);

appVolume.setAppVolume(selector, 30);
console.log("Chrome Peak:", appVolume.getAppPeak(selector));

appVolume.setAppMute(selector, true);
console.log("Chrome Muted:", appVolume.getAppMute(selector));
```
