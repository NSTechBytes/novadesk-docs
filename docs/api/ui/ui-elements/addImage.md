---
title: Image element options and supported formats.
---

# Image Element
The Image element renders bitmap content inside a UI script via the shared element options.

Use `ui.addImage()` in your UI script (`win` is the UI script's global object).

```js
ui.addImage(options);
```

#### Table of Contents
[[toc]]

## Shared Options
Refer to:
- [General Element Options](/api/ui/ui-elements/general-options/general-elements-options) for layout and interaction.
- [General Image Options](/api/ui/ui-elements/general-options/general-image-options) for shared image processing fields.
- [General Tooltip Options](/api/ui/ui-elements/general-options/tooltip) for tooltip appearance and behavior.
- [Mouse Events Callback](/api/ui/ui-elements/general-options/general-mouse-options) for mouse interaction and cursor settings.

## Image Element Options

<PropertyBox name="path" type="string" required>
  The `path` property specifies the image file to display. Relative paths are resolved from the script directory, while HTTP and HTTPS URLs are loaded asynchronously in the background.

  The image element remains empty until the image has finished loading, after which it updates automatically.

  ```javascript
  path: "./assets/logo.png"
  path: "../shared/icons/cpu.svg"
  path: "https://example.com/banner.jpg"
  ```

  The image source can also be changed at runtime.

  ```javascript
  ui.setElementProperties("my-image", {
      path: "./assets/logo-dark.png"
  });
  ```

</PropertyBox>

<PropertyBox name="preserveAspectRatio" type="string" defaultValue='"stretch"'>
  The `preserveAspectRatio` property controls how the image is scaled to fit the element's `width` and `height`.

  Supported values are `"stretch"`, `"preserve"`, and `"crop"`.

  When set to `"stretch"`, the image is resized to exactly match the element bounds, ignoring its original aspect ratio. This fills the entire element but may distort the image.

  ```text
  Element: 300×100     Image: 200×200
  Result:  300×100 (stretched)
  ```

  When set to `"preserve"`, the image is scaled down uniformly so it fits entirely within the element while maintaining its aspect ratio. The image is centered, and empty space may appear around it.

  ```text
  Element: 300×100     Image: 200×200
  Scale:   min(300/200, 100/200) = 0.5
  Result:  100×100, centered
  ```

  When set to `"crop"`, the image is scaled uniformly to completely fill the element while preserving its aspect ratio. Any excess area is cropped from the edges.

  ```text
  Element: 300×100     Image: 200×200
  Scale:   max(300/200, 100/200) = 1.5
  Result:  300×300 image with the center 300×100 visible
  ```

  ```javascript
  preserveAspectRatio: "crop"       // Fill bounds, crop excess
  preserveAspectRatio: "preserve"   // Maintain aspect ratio
  preserveAspectRatio: "stretch"    // Fill bounds (default)
  ```

</PropertyBox>

<PropertyBox name="tile" type="boolean" defaultValue="false">
  The `tile` property specifies whether the image should repeat to fill the element.

  When enabled, the entire image (or the cropped region when `imageCrop` is used) is tiled using `D2D1_EXTEND_MODE_WRAP`, creating a seamless repeating pattern.

  ```javascript
  ui.addImage({
      id: "background",
      x: 0,
      y: 0,
      width: 1020,
      height: 800,
      path: "./textures/noise.png",
      tile: true,
      imageAlpha: 30,
  });
  ```

  `tile` is only supported when `preserveAspectRatio` is set to `"stretch"`. It cannot be used together with `"preserve"` or `"crop"`.

</PropertyBox>

<PropertyBox name="scaleMargins" type="array<number>">
  The `scaleMargins` property enables 9-slice scaling (also known as scale-9 or border-image).

  The image is divided into a 3×3 grid using four margin values in the order `[left, top, right, bottom]`. The four corners remain at their original size, the edges stretch along a single axis, and the center stretches freely in both directions.

  ```javascript
  ui.addImage({
      id: "button-bg",
      path: "./assets/button.png",
      width: 200,
      height: 50,
      scaleMargins: [10, 10, 10, 10],
      preserveAspectRatio: "stretch",
  });
  ```

  `scaleMargins` requires `tile` to be `false` and `preserveAspectRatio` to be `"stretch"`. If color matrix effects are applied, 9-slice scaling is disabled and the image is rendered normally.

  All margin values are clamped to `0` or greater. If the combined left and right margins exceed the image width, they are reduced proportionally to fit the source image.

</PropertyBox>