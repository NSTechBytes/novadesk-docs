---
title: Monitor and control media playback with the now-playing-monitor module.
---

# now-playing-monitor Module
Monitor and control active media playback in Novadesk through playback metadata and transport controls.

The now-playing-monitor module can be accessed using `require("now-playing-monitor")`.

```javascript
const nowPlayingMonitor = require("now-playing-monitor");
```

#### Table of Contents
[[toc]]

## `new nowPlayingMonitor.nowPlaying()`

Creates a new now playing monitor instance.

## `nowPlaying.stats()`

Gets current media session information.

### Return Value

- **Type**: `Object`
- **Description**: Contains:
  - **`available`** (`boolean`): `true` when media session data is available.
  - **`player`** (`string`): Player/application display name.
  - **`artist`** (`string`): Track artist.
  - **`album`** (`string`): Track album.
  - **`title`** (`string`): Track title.
  - **`thumbnail`** (`string`): Path to a cached thumbnail image (if available).
  - **`duration`** (`number`): Total track duration in seconds.
  - **`position`** (`number`): Current position in seconds.
  - **`progress`** (`number`): Playback progress percentage (`0-100`).
  - **`state`** (`number`): Playback state (`0` stopped/unknown, `1` playing, `2` paused).
  - **`status`** (`number`): Session status (`0` closed, `1` opened).
  - **`shuffle`** (`boolean`): Shuffle enabled state.
  - **`repeat`** (`boolean`): Repeat enabled state.

## `nowPlaying.play()`

Send the play command to the active media session.

## `nowPlaying.pause()`

Send the pause command to the active media session.

## `nowPlaying.playPause()`

Toggle between play and pause.

## `nowPlaying.stop()`

Stop playback on the active session.

## `nowPlaying.next()`

Skip to the next track.

## `nowPlaying.previous()`

Go to the previous track.

## `nowPlaying.setPosition(value, mode)`

Seeks playback position.

### Parameters

- **`value`**
  - **Type**: `number`
  - **Description**: Target position value.

- **`mode`**
  - **Type**: `string`
  - **Required**: No
  - **Default**: `"percent"`
  - **Description**: Seek mode:
    - `"percent"`: `value` is treated as percentage (`0-100`).
    - `"seconds"`: `value` is treated as absolute seconds.

::: info
If `mode` is omitted, values above `100` are treated as seconds.
:::

## `nowPlaying.setShuffle(enabled)`

Enable or disable shuffle mode.

### Parameters

- **`enabled`**
  - **Type**: `boolean`
  - **Description**: `true` to enable shuffle, `false` to disable it.

## `nowPlaying.toggleShuffle()`

Toggle shuffle mode.

## `nowPlaying.setRepeat(mode)`

Set the repeat mode.

### Parameters

- **`mode`**
  - **Type**: `string`
  - **Valid values**: `"none"`, `"one"`, `"all"`

## `nowPlaying.destroy()`

Destroy the monitor and free its resources.

## Example

```javascript
const nowPlayingMonitor = require("now-playing-monitor");
var nowPlaying = new nowPlayingMonitor.nowPlaying();

var intervalId = setInterval(function () {
    var stats = nowPlaying.stats();
    console.log("Now playing:", stats.title, "-", stats.artist, "(" + stats.player + ")");
}, 1000);

nowPlaying.setShuffle(true);
nowPlaying.setRepeat("all");

setTimeout(function () {
    clearInterval(intervalId);
    nowPlaying.destroy();
    console.log("Now Playing Monitor Destroyed");
}, 10000);
```
