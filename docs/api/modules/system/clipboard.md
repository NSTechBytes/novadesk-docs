---
title: Access Windows clipboard text with the clipboard module.
---

# clipboard Module

Read and write plain text in the Windows clipboard.

```javascript
import { clipboard } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="clipboard.getText()"
  badge="clipboard"
  badgeType="core"
  returns="string"
>
<template #returns>The current clipboard text, or an empty string if no text is available.</template>

Gets the current plain text content of the Windows clipboard.

<template #example>

```javascript
import { clipboard } from "system";

const text = clipboard.getText();
console.log("Clipboard:", text);
```

</template>
</MethodBox>

---

<MethodBox
  name="clipboard.setText(text)"
  badge="clipboard"
  badgeType="core"
  returns="boolean"
  :parameters="[
    { name: 'text', type: 'string', description: 'Text to write to the clipboard.' }
  ]"
>
<template #returns><code>true</code> if the clipboard was updated, <code>false</code> otherwise.</template>

Sets the Windows clipboard to the given plain text string.

<template #example>

```javascript
import { clipboard } from "system";

const ok = clipboard.setText("Copied from Novadesk");
console.log("setText:", ok); // true

const value = clipboard.getText();
console.log("clipboard:", value); // "Copied from Novadesk"
```

</template>
</MethodBox>
