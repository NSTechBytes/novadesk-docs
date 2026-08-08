---
title: Bitmap element options and example usage.
---

# Bitmap Element
The Bitmap element renders frame-based image strips for meters, digits, and sprite-like indicators.

Create one with `ui.addBitmap()` and the shared [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Element Options](/api/ui/ui-elements/general-options/general-elements-options), and [General Element Options](/api/ui/ui-elements/general-options/general-elements-options).

```js
ui.addBitmap(options);
```

#### Table of Contents
[[toc]]

## Bitmap Options

<PropertyBox name="bitmapImageName" type="string" required>
  The `bitmapImageName` property specifies the sprite sheet image that contains all bitmap frames. Relative paths are resolved from the script directory, while HTTP and HTTPS URLs are loaded asynchronously.

  ```javascript
  bitmapImageName: "./assets/progress.png"
  bitmapImageName: "./assets/digits.png"
  bitmapImageName: "https://example.com/assets/animation.png"
  ```

</PropertyBox>

<PropertyBox name="value" type="number" defaultValue="0.0">
  The `value` property specifies the current value used to determine which frame is displayed.

  When `bitmapExtend` is `false`, the value is normalized between `minValue` and `maxValue` and then mapped to the corresponding frame index.

  When `bitmapExtend` is `true`, the value is treated as an integer. Each digit is rendered as an individual frame from the sprite sheet, creating an odometer-style display.

  ```javascript
  // Standard: show frame 7 of 10 (70% through)
  value: 70,
  minValue: 0,
  maxValue: 100,
  bitmapFrames: 10

  // Extend: show "42" using digit frames
  value: 42,
  bitmapExtend: true,
  bitmapFrames: 10
  ```

</PropertyBox>

<PropertyBox name="bitmapFrames" type="number" defaultValue="1">
  The `bitmapFrames` property specifies the total number of frames contained in the sprite sheet. The image is divided into this many equally sized frames.

  Values less than or equal to `0` are automatically clamped to `1`.

  ```javascript
  bitmapFrames: 10    // 10-frame animation (0-9)
  bitmapFrames: 60    // 60-frame clock seconds
  bitmapFrames: 100   // 100-step progress bar
  ```

</PropertyBox>

<PropertyBox name="minValue" type="number" defaultValue="0.0">
  The `minValue` property defines the value that maps to the first frame (frame `0`).

  This property is only used when `bitmapExtend` is `false`.

  ```javascript
  minValue: 0
  maxValue: 100

  minValue: -50
  maxValue: 50
  ```

</PropertyBox>

<PropertyBox name="maxValue" type="number" defaultValue="1.0">
  The `maxValue` property defines the value that maps to the last frame in the sprite sheet. Together with `minValue`, it determines the complete value range.

  If `maxValue` is less than or equal to `minValue`, it is automatically set to `minValue + 0.001` to ensure a valid range.

</PropertyBox>

<PropertyBox name="bitmapZeroFrame" type="boolean" defaultValue="false">
  The `bitmapZeroFrame` property changes how frame `0` is used in standard mode.

  When set to `false`, frame `0` represents values at or below `minValue`, and the remaining frames are distributed evenly across the value range.

  When set to `true`, frame `0` is reserved as a dedicated zero or empty state that is displayed only when `value` equals `0`. The remaining `bitmapFrames - 1` frames represent the value range.

  ```javascript
  // Volume indicator with silent state
  bitmapFrames: 5,
  bitmapZeroFrame: true,
  value: 0
  ```

</PropertyBox>

<PropertyBox name="bitmapExtend" type="boolean" defaultValue="false">
  The `bitmapExtend` property enables odometer mode when set to `true`.

  In this mode, the `value` is treated as a non-negative integer and decomposed into individual digits. Each digit is rendered using a separate frame from the sprite sheet and displayed horizontally.

  The digit base is determined by `bitmapFrames`. For example, `bitmapFrames: 10` displays decimal digits, `bitmapFrames: 16` displays hexadecimal digits, and `bitmapFrames: 2` displays binary digits. If `bitmapFrames` is `1`, a base of `2` is used.

  ```text
  value: 42, bitmapFrames: 10
  Renders: frame[4] | frame[2]

  value: 1234, bitmapFrames: 10
  Renders: frame[1] | frame[2] | frame[3] | frame[4]
  ```

  ```javascript
  bitmapImageName: "./assets/digits-0-9.png",
  bitmapFrames: 10,
  bitmapExtend: true,
  value: 1337
  ```

</PropertyBox>

<PropertyBox name="bitmapDigits" type="number" defaultValue="0">
  The `bitmapDigits` property specifies the number of digit frames rendered in extend mode.

  This property is only used when `bitmapExtend` is `true`.

  A value of `0` automatically calculates the required number of digits based on the current value. Values greater than `0` always render the specified number of digits, padding with leading zero frames when necessary.

  ```javascript
  bitmapExtend: true,
  bitmapDigits: 4,
  value: 7
  ```

</PropertyBox>

<PropertyBox name="bitmapOrientation" type="string" defaultValue='"auto"'>
  The `bitmapOrientation` property overrides the automatic frame layout detection.

  Supported values are `"auto"`, `"horizontal"`, and `"vertical"`.

  When set to `"auto"`, tall images are treated as vertically stacked frames, while wide images are treated as horizontally arranged frames.

  ```javascript
  bitmapOrientation: "auto"
  bitmapOrientation: "horizontal"
  bitmapOrientation: "vertical"
  ```

</PropertyBox>

<PropertyBox name="bitmapAlign" type="string" defaultValue='"left"'>
  The `bitmapAlign` property controls the horizontal alignment of the rendered digit group.

  This property only applies when `bitmapExtend` is `true`.

  Supported values are `"left"`, `"center"`, and `"right"`.

  ```javascript
  bitmapExtend: true,
  bitmapAlign: "right",
  x: 200
  ```

</PropertyBox>

<PropertyBox name="bitmapSeparation" type="number" defaultValue="0">
  The `bitmapSeparation` property specifies the spacing, in pixels, between adjacent digit frames.

  This property only applies when `bitmapExtend` is `true`.

  ```javascript
  bitmapExtend: true,
  bitmapSeparation: 4
  ```

</PropertyBox>