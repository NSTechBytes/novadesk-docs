---
title: Backdrop Filter
description: Visual guide to backdropFilter for UI elements in Novadesk. Apply GPU-accelerated blur, brightness, and color effects to the background behind an element.
---

# Backdrop Filter

The `backdropFilter` property applies GPU-accelerated visual effects to the content **behind** an element — like frosted glass. The element itself stays sharp, but the background seen through it is modified.

::: tip
Backdrop filters are a shared option — available on **all** UI elements ([addShape](/api/ui/ui-elements/add-shape), [addText](/api/ui/ui-elements/add-text), [addImage](/api/ui/ui-elements/add-image), etc.). See [General Options](/api/ui/ui-elements/general-options) for the full list.
:::

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `blur` | `number` | `0` | Gaussian blur radius in pixels (≥ 0) |
| `brightness` | `number` | `1.0` | Brightness multiplier (`1.0` = normal) |
| `contrast` | `number` | `1.0` | Contrast multiplier (≥ 0) |
| `grayscale` | `number` | `0` | Grayscale intensity (`0.0`–`1.0`) |
| `saturate` | `number` | `1.0` | Saturation multiplier (`0` = no color) |
| `sepia` | `number` | `0` | Sepia tone intensity (`0.0`–`1.0`) |
| `hueRotate` | `number` | `0` | Hue rotation in degrees |
| `invert` | `number` | `0` | Color inversion intensity (`0.0`–`1.0`) |
| `opacity` | `number` | `1.0` | Opacity of the filtered backdrop (`0.0`–`1.0`) |

## Blur

The most common effect — creates a frosted glass look by blurring everything behind the element.

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">0px</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">4px</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">10px</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">20px</span>
    </div>
  </div>
</div>

| Blur Value | Effect |
|---|---|
| `0` | No blur (default) |
| `4` | Subtle softening |
| `10` | Frosted glass |
| `20` | Heavy blur (near-opaque) |

```javascript
// Frosted glass panel
ui.addShape({
  id: "glass",
  x: 16, y: 16,
  width: 300, height: 150,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: 12,
  backdropFilter: { blur: 10 }
});
```

::: warning Performance
Keep `blur` under **20px** for smooth animation. Higher values require more GPU work per frame.
:::

## Brightness

Adjusts how light or dark the background appears through the element.

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: brightness(0.3); -webkit-backdrop-filter: brightness(0.3); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.5); padding: 4px 8px; border-radius: 4px;">0.3</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: brightness(0.7); -webkit-backdrop-filter: brightness(0.7); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">0.7</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: brightness(1.0); -webkit-backdrop-filter: brightness(1.0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">1.0</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: brightness(1.5); -webkit-backdrop-filter: brightness(1.5); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">1.5</span>
    </div>
  </div>
</div>

```javascript
// Darken background behind a text panel
ui.addShape({
  id: "overlay",
  x: 0, y: 0,
  width: 400, height: 300,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: { brightness: 0.6 }
});
```

## Contrast

Adjusts the contrast of the background. Lower values wash out details; higher values make them pop.

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: contrast(0.3); -webkit-backdrop-filter: contrast(0.3); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">0.3</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: contrast(0.7); -webkit-backdrop-filter: contrast(0.7); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">0.7</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: contrast(1.0); -webkit-backdrop-filter: contrast(1.0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">1.0</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: contrast(1.8); -webkit-backdrop-filter: contrast(1.8); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">1.8</span>
    </div>
  </div>
</div>

## Grayscale

Converts the background to grayscale. `0` = full color, `1.0` = fully desaturated.

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: grayscale(0); -webkit-backdrop-filter: grayscale(0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: grayscale(0.5); -webkit-backdrop-filter: grayscale(0.5); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0.5</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: grayscale(0.8); -webkit-backdrop-filter: grayscale(0.8); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0.8</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: grayscale(1.0); -webkit-backdrop-filter: grayscale(1.0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">1.0</span>
    </div>
  </div>
</div>

```javascript
// Muted background — grayscale + slight darken
ui.addShape({
  id: "muted",
  x: 16, y: 16,
  width: 300, height: 150,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  borderRadius: 8,
  backdropFilter: { grayscale: 0.8, brightness: 0.7 }
});
```

## Saturation

Adjusts color intensity of the background. `0` = no color, `>1` = vivid.

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: saturate(0); -webkit-backdrop-filter: saturate(0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: saturate(0.5); -webkit-backdrop-filter: saturate(0.5); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0.5</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: saturate(1.0); -webkit-backdrop-filter: saturate(1.0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">1.0</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: saturate(2.0); -webkit-backdrop-filter: saturate(2.0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">2.0</span>
    </div>
  </div>
</div>

## Sepia

Applies a warm, vintage brown tone to the background.

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: sepia(0); -webkit-backdrop-filter: sepia(0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: sepia(0.4); -webkit-backdrop-filter: sepia(0.4); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0.4</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: sepia(0.7); -webkit-backdrop-filter: sepia(0.7); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0.7</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: sepia(1.0); -webkit-backdrop-filter: sepia(1.0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">1.0</span>
    </div>
  </div>
</div>

## Hue Rotate

Shifts all colors in the background around the color wheel.

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: hue-rotate(0deg); -webkit-backdrop-filter: hue-rotate(0deg); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">0°</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: hue-rotate(90deg); -webkit-backdrop-filter: hue-rotate(90deg); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">90°</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: hue-rotate(180deg); -webkit-backdrop-filter: hue-rotate(180deg); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">180°</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: hue-rotate(270deg); -webkit-backdrop-filter: hue-rotate(270deg); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #fff; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px;">270°</span>
    </div>
  </div>
</div>

## Invert

Inverts all colors in the background. `0` = normal, `1.0` = fully inverted (like a photo negative).

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: invert(0); -webkit-backdrop-filter: invert(0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: invert(0.3); -webkit-backdrop-filter: invert(0.3); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0.3</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: invert(0.7); -webkit-backdrop-filter: invert(0.7); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">0.7</span>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; height: 100px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
    <div style="position: absolute; inset: 0; backdrop-filter: invert(1.0); -webkit-backdrop-filter: invert(1.0); display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 11px; color: #333; background: rgba(255,255,255,0.6); padding: 4px 8px; border-radius: 4px;">1.0</span>
    </div>
  </div>
</div>

## Combining Effects

You can combine multiple filter properties in a single object. The effects are applied in sequence.

### Dark Overlay

Dim and desaturate the background to make foreground text readable:

```javascript
ui.addShape({
  id: "overlay",
  x: 0, y: 0,
  width: 400, height: 300,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: { brightness: 0.5, saturate: 0.3 }
});
```

### Frosted Glass Card

Blur + subtle brightness + semi-transparent background:

```javascript
ui.addShape({
  id: "card",
  x: 16, y: 16,
  width: 280, height: 120,
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  borderRadius: 12,
  backdropFilter: { blur: 12, brightness: 1.1 }
});

ui.addText({
  id: "card-title",
  x: 32, y: 32,
  width: 240, height: 20,
  text: "Frosted Card",
  fontFace: "Segoe UI",
  fontSize: 16,
  fontWeight: 600,
  fontColor: "rgb(255,255,255)",
  textAlign: "left-center"
});
```

### Focus Mode

Blur everything except a centered region:

```javascript
// Full-screen blur overlay
ui.addShape({
  id: "focus-blur",
  x: 0, y: 0,
  width: 400, height: 300,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  backdropFilter: { blur: 6, brightness: 0.7 }
});

// Sharp content on top (no backdropFilter)
ui.addShape({
  id: "focus-card",
  x: 50, y: 80,
  width: 300, height: 140,
  backgroundColor: "rgba(30, 30, 50, 0.95)",
  borderRadius: 12
});
```

### Vintage Photo Effect

Sepia + reduced brightness + slight desaturation:

```javascript
ui.addShape({
  id: "vintage",
  x: 0, y: 0,
  width: 400, height: 300,
  backdropFilter: {
    sepia: 0.6,
    brightness: 0.85,
    saturate: 0.7,
    contrast: 1.2
  }
});
```

## I Want To...

| Goal | backdropFilter |
|---|---|
| Frosted glass panel | `{ blur: 10 }` |
| Darken background for readability | `{ brightness: 0.5 }` + `backgroundColor: "rgba(0,0,0,0.3)"` |
| Desaturate background | `{ grayscale: 0.8 }` or `{ saturate: 0.2 }` |
| Vintage / warm tone | `{ sepia: 0.6 }` |
| Color shift effect | `{ hueRotate: 90 }` |
| Photo negative look | `{ invert: 1.0 }` |
| High-contrast background | `{ contrast: 1.5 }` |
| Muted + dark background | `{ brightness: 0.5, saturate: 0.3, grayscale: 0.4 }` |

## Common Mistakes

| Problem | Cause | Fix |
|---|---|---|
| No visible effect | Element has no content behind it | Make sure there are elements rendered **behind** the filtered element |
| Performance drops | `blur` is too high | Keep `blur` under 20px for smooth rendering |
| Text unreadable on top | Background too bright after filter | Add a semi-transparent `backgroundColor` on top of the filter |
| Filter not working | Using on a container with no visual content | Apply to elements that have visible content behind them (images, shapes, text) |

::: tip Layering order
Backdrop filters affect content **behind** the element. If you have:
1. An image (bottom layer)
2. A shape with `backdropFilter: { blur: 10 }` (middle layer)
3. Text on top (top layer)

The shape blurs the image behind it, and the text stays sharp on top.
:::

## Related Pages

- [General Options](/api/ui/ui-elements/general-options) — Full list of shared options including `backdropFilter`
- [addShape](/api/ui/ui-elements/add-shape) — Shape element (commonly used with backdrop filters)
- [addText](/api/ui/ui-elements/add-text) — Text element properties
- [addImage](/api/ui/ui-elements/add-image) — Image element (often the background being filtered)
- [BlurBehind Addon](/api/addons/BlurBehind) — Window-level blur effects (different from element-level backdrop filters)
- [Color Formats](/guides/colors) — RGB, RGBA, and gradient syntax for `backgroundColor`
