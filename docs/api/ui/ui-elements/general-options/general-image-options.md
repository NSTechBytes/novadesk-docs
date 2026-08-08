---
title: Shared image options for UI image-based elements
---

# General Image Options

Options shared by image-based UI elements: `ui.addImage()`, `ui.addButton()`, `ui.addBitmap()`, and `ui.addRotator()`.

Use these together with [General Element Options](/api/ui/ui-elements/general-options/general-elements-options) (which also covers tooltip, mouse events, and cursor options).

#### Table of Contents
[[toc]]

## Image Processing

<PropertyBox name="imageAlpha" type="number" defaultValue="255">

Image opacity in the range `0–255`. `255` is fully opaque, `0` is fully transparent.

```js
ui.addImage({ id: "logo", path: "./logo.png", imageAlpha: 180 });
```

</PropertyBox>

<PropertyBox name="grayscale" type="boolean" defaultValue="false">

When `true`, renders the image in grayscale, removing all color saturation.

```js
ui.addImage({ id: "icon", path: "./icon.png", grayscale: true });
```

</PropertyBox>

<PropertyBox name="useExifOrientation" type="boolean" defaultValue="false">

When `true`, applies EXIF orientation metadata embedded in the image file. Useful for photos taken on mobile devices that store rotation in EXIF rather than in the pixel data.

</PropertyBox>

<PropertyBox name="imageTint" type="string" defaultValue='""'>

A color or gradient overlaid on the image. Supports all Novadesk color formats including `rgb()`, `rgba()`, hex, `linearGradient()`, and `radialGradient()`.

```js
ui.addImage({ id: "icon", path: "./icon.png", imageTint: "rgba(0,180,255,0.5)" });
```

</PropertyBox>

<PropertyBox name="imageFlip" type="string" defaultValue='"none"'>

Flips the rendered image. Valid values:

| Value | Description ||
| `"none"` | No flip (default). |
| `"horizontal"` | Mirrors the image left-to-right. |
| `"vertical"` | Mirrors the image top-to-bottom. |
| `"both"` | Mirrors both horizontally and vertically. |

```js
ui.addImage({ id: "arrow", path: "./arrow.png", imageFlip: "horizontal" });
```

</PropertyBox>

<PropertyBox name="colorMatrix" type="number[]" defaultValue="[]">

A Direct2D 5×4 color matrix (20 numbers) applied to the image for advanced color effects — hue rotation, saturation, brightness, contrast, channel swaps, and more.

Values are specified in row-major order: `[R→R, G→R, B→R, A→R, bias_R, R→G, ...]`.

An empty array disables the color matrix.

```js
// Invert colors
ui.addImage({
    id: "inverted",
    path: "./photo.png",
    colorMatrix: [
        -1,  0,  0, 0, 1,
         0, -1,  0, 0, 1,
         0,  0, -1, 0, 1,
         0,  0,  0, 1, 0
    ]
});
```

::: tip
See the [Color Matrix Guide](/guides/color-matrix-guide) for recipes and examples.
:::

</PropertyBox>

## Crop

<PropertyBox name="imageCrop" type="number[]" defaultValue="[]">

Crops the source image before rendering. Coordinates are in source image pixels.

**Accepted forms:**

- `[x, y, width, height]` — crop a rectangular region from the source
- `[x, y, width, height, origin]` — with an optional origin hint (clamped internally)

An empty array disables cropping and renders the full image.

::: info Compatibility
`imageCrop` is supported by `ui.addImage()` and `ui.addButton()`.
It is **ignored** by `ui.addBitmap()` and `ui.addRotator()`.
:::

```js
// Show only the top-left 64×64 region of a larger sprite sheet
ui.addImage({
    id: "sprite",
    path: "./spritesheet.png",
    imageCrop: [0, 0, 64, 64]
});
```

</PropertyBox>
