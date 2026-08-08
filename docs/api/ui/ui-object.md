---
title: Win Object Methods
---

# ui Object

Methods available inside a UI script via the global `ui` object. The `ui` object is how you create and manage all visual elements in your widget.

::: info Strict separation of concerns
- **Main script** (`index.js`): Creates widget windows, handles logic and data. Cannot add UI elements directly.
- **UI script** (`ui.js`): Creates and updates visual elements. Cannot change window-level properties directly.
- **Communication**: Use the global [ipc](/api/ipc) object to pass data between the two.
:::

#### Table of Contents
[[toc]]

---

## Adding Elements

<MethodBox
  name="ui.addText(options)"
  badge="ui"
  badgeType="ui"
>

Creates a text element. See [addText Options](/api/ui/ui-elements/addText) for all available properties.

<template #example>

```javascript
ui.addText({
  id: "label",
  text: "Hello Novadesk",
  x: 16, y: 14,
  fontSize: 16,
  fontColor: "rgb(230,230,230)"
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addInputBox(options)"
  badge="ui"
  badgeType="ui"
>

Creates an interactive text input field. See [addInputBox Options](/api/ui/ui-elements/addInputBox) for all available properties.

<template #example>

```javascript
ui.addInputBox({
  id: "search",
  placeholder: "Type to search…",
  x: 16, y: 50,
  width: 260, height: 36
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addImage(options)"
  badge="ui"
  badgeType="ui"
>

Adds an image element. Supports local files, HTTP/HTTPS URLs, and 9-slice scaling. See [addImage Options](/api/ui/ui-elements/addImage).

<template #example>

```javascript
ui.addImage({
  id: "logo",
  path: "./assets/logo.png",
  x: 16, y: 16,
  width: 64, height: 64
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addButton(options)"
  badge="ui"
  badgeType="ui"
>

Adds an image-based button element with click callback. See [addButton Options](/api/ui/ui-elements/addButton).

<template #example>

```javascript
ui.addButton({
  id: "close-btn",
  buttonImageName: "./assets/close.png",
  x: 360, y: 8,
  buttonAction: () => ipc.sendToMain("close")
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addBitmap(options)"
  badge="ui"
  badgeType="ui"
>

Adds a frame-based sprite sheet element for meters, digits, and animations. See [addBitmap Options](/api/ui/ui-elements/addBitmap).

<template #example>

```javascript
ui.addBitmap({
  id: "digits",
  bitmapImageName: "./assets/digits.png",
  bitmapFrames: 10,
  bitmapExtend: true,
  value: 42
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addShape(options)"
  badge="ui"
  badgeType="ui"
>

Adds a 2D vector shape: rectangle, ellipse, line, curve, arc, path, or combine. See [addShape Options](/api/ui/ui-elements/addShape).

<template #example>

```javascript
ui.addShape({
  id: "card",
  type: "rectangle",
  x: 16, y: 16,
  width: 260, height: 80,
  fillColor: "rgba(35,35,35,220)",
  strokeColor: "rgba(255,255,255,40)",
  strokeWidth: 1,
  backgroundColorRadius: 10
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addBar(options)"
  badge="ui"
  badgeType="ui"
>

Adds a progress bar element with normalized `0.0–1.0` value. See [addBar Options](/api/ui/ui-elements/addBar).

<template #example>

```javascript
ui.addBar({
  id: "cpu-bar",
  x: 16, y: 60,
  width: 260, height: 8,
  value: 0.65,
  barColor: "#00b4ff",
  backgroundColorRadius: 4,
  barCornerRadius: 4
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addLine(options)"
  badge="ui"
  badgeType="ui"
>

Adds a line graph element supporting multiple overlaid lines. See [addLine Options](/api/ui/ui-elements/addLine).

<template #example>

```javascript
ui.addLine({
  id: "cpu-line",
  x: 16, y: 80,
  width: 260, height: 60,
  lineColor: "#00b4ff",
  rangeMin: 0, rangeMax: 100
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addAreaGraph(options)"
  badge="ui"
  badgeType="ui"
>

Adds a filled area graph element. See [addAreaGraph Options](/api/ui/ui-elements/addAreaGraph).

<template #example>

```javascript
ui.addAreaGraph({
  id: "mem-area",
  x: 16, y: 80,
  width: 260, height: 60,
  lineColor: "#00ff88",
  fillColor: "rgba(0,255,136,0.15)"
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addHistogram(options)"
  badge="ui"
  badgeType="ui"
>

Adds a bar-by-bar histogram element supporting dual-channel data. See [addHistogram Options](/api/ui/ui-elements/addHistogram).

<template #example>

```javascript
ui.addHistogram({
  id: "spectrum",
  x: 16, y: 80,
  width: 260, height: 60,
  primaryColor: "#00ff88"
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addRotator(options)"
  badge="ui"
  badgeType="ui"
>

Adds an image-based rotator element for gauge needles and dials. See [addRotator Options](/api/ui/ui-elements/addRotator).

<template #example>

```javascript
ui.addRotator({
  id: "needle",
  rotatorImageName: "./assets/needle.png",
  value: 0.75,
  minValue: 0, maxValue: 1,
  startAngle: -Math.PI * 0.75,
  rotationAngle: Math.PI * 1.5,
  offsetX: 10, offsetY: 90
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addRoundLine(options)"
  badge="ui"
  badgeType="ui"
>

Adds a rounded arc element for circular progress indicators. See [addRoundLine Options](/api/ui/ui-elements/addRoundLine).

<template #example>

```javascript
ui.addRoundLine({
  id: "cpu-arc",
  x: 60, y: 60,
  width: 120, height: 120,
  value: 0.65,
  lineColor: "#00b4ff",
  lineColorBg: "rgba(255,255,255,0.1)",
  thickness: 8,
  startAngle: -135,
  totalAngle: 270,
  capType: "round"
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.addLayoutBox(options)"
  badge="ui"
  badgeType="ui"
>

Adds a flex layout container that groups and clips child elements. See [addLayoutBox Options](/api/ui/ui-elements/addLayoutBox).

<template #example>

```javascript
ui.addLayoutBox({
  id: "card",
  x: 16, y: 16,
  width: 260, height: 80,
  backgroundColor: "rgba(30,30,40,0.9)",
  borderRadius: 8,
  flexDirection: "column",
  gap: 8,
  padding: 12,
  children: [
    { elementType: "text", id: "title", text: "CPU", fontSize: 14, fontColor: "#fff" },
    { elementType: "bar",  id: "bar",   value: 0.5, barColor: "#00b4ff", height: 6 }
  ]
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.layoutBox(options)"
  badge="ui"
  badgeType="ui"
>

Creates a LayoutBox builder object for use inside another `addLayoutBox` children array. Does not render immediately.

<template #example>

```javascript
ui.addLayoutBox({
  id: "parent",
  children: [
    ui.layoutBox({
      id: "child",
      width: 100,
      children: [
        { elementType: "text", id: "label", text: "Nested" }
      ]
    })
  ]
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.animate(options)"
  badge="ui"
  badgeType="ui"
>

Animates supported properties of an existing element. See [animate Options](/api/ui/animate) for full configuration.

<template #example>

```javascript
ui.animate({
  id: "label",
  duration: 400,
  easing: "easeOutCubic",
  to: { x: 100, y: 50 }
});
```

</template>
</MethodBox>

---

## Updating Elements

<MethodBox
  name="ui.setElementProperty(id, key, value)"
  badge="ui"
  badgeType="ui"
  :parameters="[
    { name: 'id', type: 'string', description: 'Element identifier.' },
    { name: 'key', type: 'string', description: 'Property name to update.' },
    { name: 'value', type: 'any', description: 'New value for the property.' }
  ]"
>

Updates a single property on an existing element.

<template #example>

```javascript
ui.setElementProperty("cpu-bar", "value", 0.75);
ui.setElementProperty("label", "fontColor", "#ff0000");
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.setElementProperties(id, props)"
  badge="ui"
  badgeType="ui"
  :parameters="[
    { name: 'id', type: 'string', description: 'Element identifier.' },
    { name: 'props', type: 'object', description: 'Object of property keys and new values.' }
  ]"
>

Updates multiple properties on a single element in one call.

<template #example>

```javascript
ui.setElementProperties("label", {
  text: "CPU: 72%",
  fontColor: "#00b4ff",
  x: 20
});
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.setElementPropertiesByGroup(group, props)"
  badge="ui"
  badgeType="ui"
  :parameters="[
    { name: 'group', type: 'string', description: 'Group name to target.' },
    { name: 'props', type: 'object', description: 'Properties to apply to every element in the group.' }
  ]"
>

Updates every element that shares the given `group` value.

<template #example>

```javascript
// Hide all elements in the "stats" group
ui.setElementPropertiesByGroup("stats", { show: false });
```

</template>
</MethodBox>

---

## Querying Elements

<MethodBox
  name="ui.isElementExist(id)"
  badge="ui"
  badgeType="ui"
  returns="boolean"
  :parameters="[
    { name: 'id', type: 'string', description: 'Element identifier to check.' }
  ]"
>
<template #returns><code>true</code> if an element with that ID exists, <code>false</code> otherwise.</template>

Checks whether an element with the given ID currently exists.

<template #example>

```javascript
if (ui.isElementExist("cpu-bar")) {
  ui.setElementProperty("cpu-bar", "value", 0.5);
}
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.getElementProperty(id, propertyName)"
  badge="ui"
  badgeType="ui"
  returns="any"
  :parameters="[
    { name: 'id', type: 'string', description: 'Element identifier.' },
    { name: 'propertyName', type: 'string', description: 'Name of the property to read.' }
  ]"
>
<template #returns>The property value, <code>null</code> if the element does not exist, or <code>undefined</code> if the property is not found.</template>

Reads a single property value from an existing element.

<template #example>

```javascript
const text = ui.getElementProperty("search", "text");
console.log("Input value:", text);
```

</template>
</MethodBox>

---

## Removing Elements

<MethodBox
  name="ui.removeElementById(id)"
  badge="ui"
  badgeType="ui"
  returns="boolean"
  :parameters="[
    { name: 'id', type: 'string', description: 'ID of the element to remove.' }
  ]"
>
<template #returns><code>true</code> if the element was removed, <code>false</code> if not found.</template>

Removes a single element by ID.

<template #example>

```javascript
ui.removeElementById("old-label");
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.removeElements(ids)"
  badge="ui"
  badgeType="ui"
  :parameters="[
    { name: 'ids', type: 'string | string[] | null', description: 'A single ID, an array of IDs, or null/undefined to remove all elements.' }
  ]"
>

Removes one or more elements. Pass `null`, `undefined`, or no argument to clear all elements.

::: warning
Calling `ui.removeElements()` with no arguments removes **all** elements from the widget.
:::

<template #example>

```javascript
ui.removeElements(["img1", "text3"]);
ui.removeElements(); // Clears all elements
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.removeElementsByGroup(group)"
  badge="ui"
  badgeType="ui"
  :parameters="[
    { name: 'group', type: 'string', description: 'Group name to clear.' }
  ]"
>

Removes all elements that share the given `group` value.

<template #example>

```javascript
ui.removeElementsByGroup("stats");
```

</template>
</MethodBox>

---

## Batch Updates

<MethodBox
  name="ui.beginUpdate()"
  badge="ui"
  badgeType="ui"
>

Starts a batch update. All element additions and property changes are deferred until `ui.endUpdate()` is called, preventing intermediate redraws and reducing flicker during initial setup.

<template #example>

```javascript
ui.beginUpdate();

ui.addText({ id: "title", text: "Loading…", x: 16, y: 14 });
ui.addBar({ id: "bar", value: 0, x: 16, y: 40, width: 260, height: 8 });

ui.endUpdate(); // All elements rendered at once
```

</template>
</MethodBox>

---

<MethodBox
  name="ui.endUpdate()"
  badge="ui"
  badgeType="ui"
>

Ends a batch update and forces a single redraw with all pending changes applied.

<template #example>

```javascript
ui.endUpdate();
```

</template>
</MethodBox>
