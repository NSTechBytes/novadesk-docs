---
title: Bar element options and example usage.
---

# Bar Element
The Bar element visualizes a value between `0.0` and `1.0` inside a UI script.

Use `ui.addBar()` to create the element and combine it with the shared [General Elements Options](/api/ui/ui-elements/general-options/general-elements-options), [General Tooltip Options](/api/ui/ui-elements/general-options/tooltip), and [Mouse Events Callback](/api/ui/ui-elements/general-options/general-mouse-options).

```js
ui.addBar(options);
```

#### Table of Contents
[[toc]]

## Bar Options

<PropertyBox name="value" type="number" defaultValue="0.0">

  The `value` property controls how much of the bar is filled. It represents a normalized fraction of the bar's total length or height, where `0.0` means completely empty and `1.0` means completely full.

The bar does not use a minimum or maximum value scale. Instead, `value` is always interpreted as a direct fraction of the bar's total size. For example, a value of `0.5` always fills exactly half of the bar, regardless of its width, height, or orientation.

Scale:

| Value  | Meaning                          |
| ------ | -------------------------------- |
| `0.0`  | The bar is completely empty.     |
| `0.25` | The bar is 25% filled.           |
| `0.5`  | The bar is 50% filled (halfway). |
| `0.75` | The bar is 75% filled.           |
| `1.0`  | The bar is completely full.      |

</PropertyBox>

<PropertyBox name="orientation" type="string" defaultValue='"horizontal"'>

  The `orientation` property controls the axis along which the bar fills. In horizontal mode, the filled area grows from the left edge toward the right. In vertical mode, it grows from the bottom edge upward, matching the natural behavior expected from a gauge, volume meter, or level indicator.

Valid values:

| Value          | Behavior                                    |
| -------------- | ------------------------------------------- |
| `"horizontal"` | The bar fills from left to right (default). |
| `"vertical"`   | The bar fills from bottom to top.           |

</PropertyBox>


<PropertyBox name="barCornerRadius" type="number" defaultValue="0">

  The `barCornerRadius` property controls the corner radius, in pixels, of the filled portion of the bar. It applies only to the colored area determined by `value` and is independent of `backgroundColorRadius`, which controls the corner radius of the background track.

Setting `barCornerRadius` and `backgroundColorRadius` to the same value creates a fully cohesive, pill-shaped appearance.

</PropertyBox>

<PropertyBox name="barColor" type="string" defaultValue='"rgb(0, 255, 0)"'>

  The `barColor` property defines the color or gradient of the filled portion of the bar. Without `barColor`, no bar fill is rendered; only the background track is visible if `backgroundColor` is set.

It supports all color formats available in the Novadesk color system, including named CSS colors, hexadecimal colors, `rgb()`/`rgba()` notation, linear gradients, and radial gradients.

</PropertyBox>
