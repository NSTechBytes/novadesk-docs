---
title: Modules API index
---

# Modules API

## Note About Novadesk Modules

Novadesk modules provide a native bridge between widget JavaScript and Windows system features.
These modules are designed for real-time desktop widgets, so they expose direct APIs for system state
(CPU, memory, network, power, audio, media sessions, display metrics, and more) and system actions
(wallpaper, registry, hotkeys, clipboard, app volume control).

All modules on this page are part of Novadesk's built-in `system` module namespace.
You import only what you need, and each function is synchronous from the script side.

Novadesk system modules are exported from:

```javascript
import { ... } from "system";
```

#### Table of Contents
[[toc]]

## System Modules

- [appVolume](./system/appVolume.md): Per-application audio session volume and mute control.
- [audio](./system/audio.md): Master volume control and WAV playback.
- [audioLevel](./system/audioLevel.md): Audio RMS/peak levels and frequency bands.
- [brightness](./system/brightness.md): Display brightness capability and status.
- [clipboard](./system/clipboard.md): Clipboard text read/write.
- [cpu](./system/cpu.md): CPU usage percentage.
- [disk](./system/disk.md): Disk total/available/used bytes and usage percent.
- [displayMetrics](./system/displayMetrics.md): Virtual desktop and monitor layout metrics.
- [fileIcon](./system/fileIcon.md): Extract file icons to `.ico`.
- [hotkey](./system/hotkey.md): Global hotkey registration and key callbacks.
- [memory](./system/memory.md): Physical memory totals and usage.
- [mouse](./system/mouse.md): Current mouse cursor coordinates.
- [network](./system/network.md): Network RX/TX speed and cumulative totals.
- [nowPlaying](./system/nowPlaying.md): Media metadata and transport controls.
- [power](./system/power.md): AC/battery/power status values.
- [registry](./system/registry.md): Windows Registry read and write operations.
- [wallpaper](./system/wallpaper.md): Set wallpaper and get current wallpaper path.

## QuickJS Runtime Modules

- [os](./os.md): QuickJS OS module index and usage (`import * as os from "os"`).
