---
title: Control system volume and play sounds with the audio module.
---

# audio Module
Control system volume and play WAV sounds in Novadesk through the audio module.

The audio module can be accessed using `require("audio")`.

```javascript
const audio = require("audio");
```

#### Table of Contents
[[toc]]

## `audio.getVolume()`

Retrieves the current master system volume.

### Return Value

- **Type**: `number`
- **Description**: Current volume percentage (`0-100`).

## `audio.setVolume(level)`

Sets the master system volume.

### Parameters

- **`level`**
  - **Type**: `number`
  - **Description**: Target volume percentage (`0-100`). Values outside the range are clamped.

## `audio.playSound(path, [loop])`

Plays a WAV file asynchronously.

### Parameters

- **`path`**
  - **Type**: `string`
  - **Description**: Path to the WAV file (absolute or relative to the widget script).

- **`loop`**
  - **Type**: `boolean`
  - **Default**: `false`
  - **Description**: `true` to loop until `stopSound()` is called.

### Return Value

- **Type**: `boolean`
- **Description**: `true` if sound playback started; `false` on failure.

## `audio.stopSound()`

Stops any sound initiated via `playSound()`.

## Examples

### Volume Control

```javascript
const audio = require("audio");
var vol = audio.getVolume();
console.log("Current Volume:", vol);
audio.setVolume(50);
```

### Playing an Alert Sound

```javascript
const audio = require("audio");
audio.playSound("assets/alert.wav");
```

### Looping Background Sound

```javascript
const audio = require("audio");
audio.playSound("assets/ambient.wav", true);
setTimeout(function () {
    audio.stopSound();
}, 10000);
```
