---
title: Read text from web URLs or files with webFetch from the system module.
---

# webFetch

Fetch text content from HTTP/HTTPS URLs or local files asynchronously.

```javascript
import { webFetch } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="webFetch(urlOrPath)"
  badge="system"
  badgeType="core"
  returns="Promise&lt;string&gt;"
  :parameters="[
    { name: 'urlOrPath', type: 'string', description: 'URL (http://, https://, file://) or local file path to fetch. Relative paths resolve from the widget entry script directory.' }
  ]"
>
<template #returns>A <code>Promise</code> that resolves with the fetched text on success, or rejects on failure.</template>

Fetches text content from a URL or file path. Runs on a background thread and resolves the returned Promise on the JS thread when complete.

Supported sources:
- `https://...` — HTTPS request
- `http://...` — HTTP request
- `file:///...` — Local file via file URL
- Relative path — Resolved from the widget entry script directory
- Absolute path — Direct file read

::: warning
Throws a `TypeError` synchronously if `urlOrPath` is missing or empty. Network and file errors cause the Promise to reject.
:::

<template #example>

```javascript
import { webFetch } from "system";

// Fetch from HTTPS
async function loadJson() {
  const text = await webFetch("https://api.github.com");
  const data = JSON.parse(text);
  console.log(data);
}
loadJson();

// Read a local file (relative path)
webFetch("./data/config.json")
  .then(text => console.log(text))
  .catch(err => console.error("Failed:", err));

// Read a local file (file:// URL)
webFetch("file:///C:/Temp/notes.txt")
  .then(text => console.log(text));
```

</template>
</MethodBox>
