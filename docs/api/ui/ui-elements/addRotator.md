---
title: Rotator element options and example usage.
---

# Rotator Element
The Rotator element displays a bitmap image that rotates to an angle calculated from a numeric value. The classic use case is a gauge needle — the image is a needle graphic, and value drives its angle.

Create one with `ui.addRotator()` and the shared [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Tooltip Options](/api/ui/ui-elements/general-options/tooltip), and [Mouse Events Callback](/api/ui/ui-elements/general-options/general-mouse-options).

```js
ui.addRotator(options);
```

#### Table of Contents
[[toc]]

## Rotator Options

<PropertyBox name="rotatorImageName" type="string" defaultValue='""'>

The `rotatorImageName` property specifies the image to be displayed and rotated by the Rotator element. This property is required—if no image is provided, nothing is rendered.

The value can be a relative or absolute file path. Relative paths are resolved against the script's directory. Remote images hosted over `http` or `https` are also supported and are loaded asynchronously.

By default, the element automatically uses the image's natural dimensions as its size. For example, a `200 × 200` image creates a `200 × 200` element unless `width` or `height` is explicitly specified.

Example:

```js
 rotatorImageName: "./assets/needle.png"
 rotatorImageName: "./assets/dial-hand.svg"
 rotatorImageName: "https://example.com/needle.png"
```

</PropertyBox>

<PropertyBox name="value" type="number" defaultValue="0.0">

The `value` property specifies the current value that determines the rotation angle of the Rotator element.

When `valueRemainder` is `0` (default), the value is normalized using `minValue` and `maxValue`. A value equal to `minValue` rotates the image to `startAngle`, while a value equal to `maxValue` rotates it to `startAngle + rotationAngle`. Values outside this range are automatically clamped.

When `valueRemainder` is greater than `0`, the Rotator enters modulo mode. In this mode, `minValue` and `maxValue` are ignored, and the rotation is calculated using the remainder of the value divided by `valueRemainder`. This is useful for cyclic values such as seconds, minutes, or compass headings.

Example:

```js
 // Standard mode: CPU usage (0–100%) controls the needle
 value: 75      // minValue: 0, maxValue: 100 → 75% of rotationAngle
```

</PropertyBox>

<PropertyBox name="minValue" type="number" defaultValue="0.0">

The `minValue` property defines the minimum value of the rotation range. A value equal to or less than `minValue` positions the image at `startAngle`, representing the beginning of the rotation.

In standard mode (`valueRemainder: 0`), `minValue` works together with `maxValue` to map `value` to the configured rotation range. This property is ignored when `valueRemainder` is greater than `0`.

To ensure a valid range, `maxValue` must always be greater than `minValue`. If both values are set to the same value, `maxValue` is automatically adjusted to `minValue + 0.001`.

Example:

```js
 minValue: 0      // 0 = needle at the start position
 minValue: -50    // Negative minimum for signed data
 minValue: 980    // Atmospheric pressure minimum
```

</PropertyBox>

<PropertyBox name="maxValue" type="number" defaultValue="1.0">

The `maxValue` property defines the maximum value of the rotation range. A value equal to or greater than `maxValue` positions the image at `startAngle + rotationAngle`, representing the end of the rotation.

In standard mode (`valueRemainder: 0`), `maxValue` works together with `minValue` to map `value` to the configured rotation range. This property is ignored when `valueRemainder` is greater than `0`.

Example:

```js
 maxValue: 100     // Percentage scale
 maxValue: 8000    // RPM gauge
 maxValue: 1050    // Barometric pressure
```

</PropertyBox>

<PropertyBox name="startAngle" type="number" defaultValue="0.0">

The `startAngle` property defines the angle at which the image is positioned when `value` is equal to `minValue`. The angle is specified in radians.

In Direct2D, an angle of `0` points to the right (the 3 o'clock position), and positive angles rotate clockwise.

Some common starting positions include pointing right (`0`), up (`-Math.PI / 2`), left (`Math.PI`), and the classic gauge position (`-3 * Math.PI / 4`).

Example:

```js
 startAngle: 0                    // 3 o'clock (right)
 startAngle: -Math.PI / 2         // 12 o'clock (top) = -1.5708
 startAngle: Math.PI              // 9 o'clock (left) = 3.1416
 startAngle: -3 * Math.PI / 4     // ~7:30 o'clock = -2.3562 (classic gauge start)

 // Converting degrees to radians
 startAngle: -135 * Math.PI / 180 // = -2.3562 rad
```

Common gauge configurations:

| Gauge Style          | startAngle                     | rotationAngle                |
| -------------------- | ------------------------------ | ---------------------------- |
| Full circle (clock)  | `0`                            | `2 * Math.PI` (`6.2832`)     |
| Half arc (top)       | `-Math.PI` (`-3.1416`)         | `Math.PI` (`3.1416`)         |
| 270° gauge (classic) | `-3 * Math.PI / 4` (`-2.3562`) | `3 * Math.PI / 2` (`4.7124`) |
| 180° left-to-right   | `-Math.PI / 2` (`-1.5708`)     | `Math.PI` (`3.1416`)         |

</PropertyBox>

<PropertyBox name="rotationAngle" type="number" defaultValue="2 * Math.PI">

The `rotationAngle` property defines the total angular sweep of the Rotator element. It specifies how many radians the image rotates as `value` moves from `minValue` to `maxValue`.

The final rotation angle is calculated as:

```js
finalAngle = startAngle + (rotationAngle * normalizedValue)
```

When `value` is equal to `minValue`, the image is positioned at `startAngle`. When `value` is equal to `maxValue`, the image is positioned at `startAngle + rotationAngle`.

A positive `rotationAngle` rotates the image clockwise, while a negative value rotates it counter-clockwise.

Example:

```js
 rotationAngle: 2 * Math.PI     // 360° — full circle
 rotationAngle: Math.PI         // 180° — half circle
 rotationAngle: 4.71238898      // 270° — standard gauge sweep
 rotationAngle: Math.PI / 2     // 90° — quarter turn
```

</PropertyBox>

<PropertyBox name="offsetX" type="number" defaultValue="0.0">

The `offsetX` property defines the horizontal distance, in pixels, from the left edge of the image to the rotation pivot point. Before rotation, the image is translated by `(-offsetX, -offsetY)`, causing the specified pixel to become the center of rotation.

Together with `offsetY`, this property determines the exact pivot around which the image rotates. The pivot point is always positioned at the geometric center of the element after the transform is applied.

Example:

```js
 // Image is 200×200 — pivot at the image center
 offsetX: 100,
 offsetY: 100

 // Image is 200×200 — pivot at the bottom-center (needle points upward)
 offsetX: 100,
 offsetY: 180

 // Image is 220×220 — pivot matches the element center
 offsetX: 110,
 offsetY: 110

 // 40×200 needle image — pivot 20px from the bottom
 offsetX: 20,    // 40 / 2 = horizontal center
 offsetY: 180    // 200 - 20 = 20px from the bottom
```

</PropertyBox>

<PropertyBox name="offsetY" type="number" defaultValue="0.0">

The `offsetY` property defines the vertical distance, in pixels, from the top edge of the image to the rotation pivot point. Before rotation, the image is translated by `(-offsetX, -offsetY)`, causing the specified pixel to become the center of rotation.

Together with `offsetX`, this property determines the exact pivot around which the image rotates. The pivot point is always positioned at the geometric center of the element after the transform is applied.

Example:

```js
 // Pivot 100px from the left and 150px from the top
 offsetX: 100,
 offsetY: 150
```

</PropertyBox>

<PropertyBox name="valueRemainder" type="number" defaultValue="0">

The `valueRemainder` property enables modulo mode when its value is greater than `0`. In this mode, the rotation no longer uses `minValue` and `maxValue`. Instead, the normalized value is calculated using the remainder of `value` divided by `valueRemainder`, causing the rotation to repeat continuously.

The normalized value is calculated as:

```js
normalizedValue = (Math.floor(value) % valueRemainder) / valueRemainder
```

Every `valueRemainder` units of `value`, the image completes one full `rotationAngle` sweep before wrapping back to the beginning. This is useful for cyclic values such as clock hands, odometers, and repeating gauges.

Negative values are automatically clamped to `0`, which disables modulo mode and restores normal `minValue`/`maxValue` scaling.

Example:

```js
 // Seconds hand — wraps every 60 seconds
 valueRemainder: 60,
 rotationAngle: 2 * Math.PI

 // Minute hand — wraps every hour (3600 seconds)
 valueRemainder: 3600,
 rotationAngle: 2 * Math.PI

 // RPM needle wrapping every 10,000 RPM
 valueRemainder: 10000,
 startAngle: -Math.PI / 2,
 rotationAngle: 2 * Math.PI
```

</PropertyBox>
