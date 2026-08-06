---
title: Set and read desktop wallpaper with the wallpaper module.
---

# wallpaper Module

Set the desktop wallpaper and read the current wallpaper path.

```javascript
import { wallpaper } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="wallpaper.set(path [, style])"
  badge="wallpaper"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'path', type: 'string', description: 'Absolute path to the image file to use as wallpaper.' },
    { name: 'style', type: 'string', optional: true, description: 'Wallpaper style. One of: fill, fit, stretch, tile, center, span. Defaults to fill.' }
  ]"
>
<template #returns><code>true</code> if the wallpaper was updated, <code>false</code> otherwise.</template>

Sets the desktop wallpaper to the given image file.

**Style options:**

| Value | Behavior |
|---|---|
| `fill` | Scales to fill the screen, cropping if needed (default) |
| `fit` | Scales to fit within the screen, preserving aspect ratio |
| `stretch` | Stretches to fill the screen, ignoring aspect ratio |
| `tile` | Tiles the image across the desktop |
| `center` | Centers the image at its original size |
| `span` | Spans across multiple monitors |

<template #example>

```javascript
import { wallpaper } from "system";

const ok = wallpaper.set("C:\\Wallpapers\\landscape.jpg", "fill");
console.log("Wallpaper set:", ok);
```

</template>
</MethodBox>

---

<MethodBox
  name="wallpaper.getCurrentPath()"
  badge="wallpaper"
  badgeType="core"
  returns="string"
>
<template #returns>The current wallpaper image path, or an empty string if unavailable.</template>

Returns the file path of the currently set desktop wallpaper.

<template #example>

```javascript
import { wallpaper } from "system";

const current = wallpaper.getCurrentPath();
console.log("Current wallpaper:", current);
```

</template>
</MethodBox>
