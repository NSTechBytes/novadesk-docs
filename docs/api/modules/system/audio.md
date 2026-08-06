---
title: Control system master volume and WAV playback with the audio module.
---

# audio Module

Control master system volume and play/stop WAV sounds.

```javascript
import { audio } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="audio.getVolume()"
  badge="audio"
  badgeType="core"
  returns="number"
>
<template #returns>Current master volume as a percentage in the range <code>0–100</code>.</template>

Retrieves the current master system volume level.

<template #example>

```javascript
import { audio } from "system";

const vol = audio.getVolume();
console.log("Volume:", vol); // e.g. 75
```

</template>
</MethodBox>

---

<MethodBox
  name="audio.setVolume(value)"
  badge="audio"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'value', type: 'number', description: 'Target volume percentage (0–100). Values outside the range are clamped.' }
  ]"
>
<template #returns><code>true</code> if the volume was updated, <code>false</code> otherwise.</template>

Sets the master system volume. Values below 0 or above 100 are clamped automatically.

<template #example>

```javascript
import { audio } from "system";

audio.setVolume(50);
```

</template>
</MethodBox>

---

<MethodBox
  name="audio.playSound(path [, loop])"
  badge="audio"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'path', type: 'string', description: 'Path to a WAV file to play.' },
    { name: 'loop', type: 'boolean', optional: true, description: 'true to loop playback until stopSound() is called. Defaults to false.' }
  ]"
>
<template #returns><code>true</code> if playback started, <code>false</code> otherwise.</template>

Plays a WAV file asynchronously. Only WAV format is supported.

<template #example>

```javascript
import { audio } from "system";

audio.playSound(__dirname + "\\alert.wav");

// Loop until stopped
audio.playSound(__dirname + "\\ambient.wav", true);
setTimeout(() => audio.stopSound(), 5000);
```

</template>
</MethodBox>

---

<MethodBox
  name="audio.stopSound()"
  badge="audio"
  badgeType="core"
  returns="boolean"
>
<template #returns>Always <code>true</code>.</template>

Stops any sound currently playing via `audio.playSound()`.

<template #example>

```javascript
import { audio } from "system";

audio.playSound(__dirname + "\\alert.wav", true);

setTimeout(() => {
  audio.stopSound();
}, 3000);
```

</template>
</MethodBox>
