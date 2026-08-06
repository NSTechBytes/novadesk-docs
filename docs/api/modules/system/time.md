---
title: Time formatting and timestamp utilities from the system module.
---

# time

Format dates, work with Unix timestamps, and check daylight saving time.

```javascript
import { time } from "system";
```

::: info Availability
Available in the [Main script](/guides/script-types.html#main-script-the-brain) only.
:::

#### Table of Contents
[[toc]]

---

<MethodBox
  name="time.time(format [, locale])"
  badge="time"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'format', type: 'string', description: 'strftime-style format string (e.g. %H:%M:%S). Defaults to %H:%M:%S if omitted.' },
    { name: 'locale', type: 'string', optional: true, description: 'Locale name for locale-aware formatting (e.g. en-US, de-DE).' }
  ]"
>
<template #returns>The current local time formatted as a string.</template>

Formats the current local date/time using a strftime-style format string.

**Common format tokens:**

| Token | Description | Example |
|---|---|---|
| `%Y` | 4-digit year | `2026` |
| `%m` | Month (01–12) | `08` |
| `%d` | Day (01–31) | `06` |
| `%H` | Hour 24h (00–23) | `14` |
| `%I` | Hour 12h (01–12) | `02` |
| `%M` | Minutes (00–59) | `30` |
| `%S` | Seconds (00–59) | `05` |
| `%A` | Full weekday name | `Thursday` |
| `%B` | Full month name | `August` |
| `%p` | AM/PM | `PM` |

<template #example>

```javascript
import { time } from "system";

const now = time.time("%Y-%m-%d %H:%M:%S");
console.log(now); // "2026-08-06 14:30:05"

// With locale
const localized = time.time("%A, %B %d", "en-US");
console.log(localized); // "Thursday, August 06"
```

</template>
</MethodBox>

---

<MethodBox
  name="time.timeStamp()"
  badge="time"
  badgeType="core"
  returns="number"
>
<template #returns>The current Unix timestamp in seconds.</template>

Returns the current time as a Unix timestamp (seconds since 1970-01-01 UTC).

<template #example>

```javascript
import { time } from "system";

const ts = time.timeStamp();
console.log("Unix timestamp:", ts);
```

</template>
</MethodBox>

---

<MethodBox
  name="time.timeStampFormat(timestamp, format [, locale])"
  badge="time"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'timestamp', type: 'number', description: 'Unix timestamp in seconds.' },
    { name: 'format', type: 'string', description: 'strftime-style format string.' },
    { name: 'locale', type: 'string', optional: true, description: 'Locale name for locale-aware formatting.' }
  ]"
>
<template #returns>The timestamp formatted as a string.</template>

Formats a Unix timestamp using a strftime-style format string.

<template #example>

```javascript
import { time } from "system";

const ts = time.timeStamp();
const formatted = time.timeStampFormat(ts, "%d/%m/%Y %H:%M:%S");
console.log(formatted); // "06/08/2026 14:30:05"
```

</template>
</MethodBox>

---

<MethodBox
  name="time.timeStampLocale(text, format, locale)"
  badge="time"
  badgeType="core"
  returns="number | null"
  :parameters="[
    { name: 'text', type: 'string', description: 'Date/time string to parse.' },
    { name: 'format', type: 'string', description: 'strftime-style format string matching the input text.' },
    { name: 'locale', type: 'string', description: 'Locale name used for parsing.' }
  ]"
>
<template #returns>The parsed Unix timestamp as a <code>number</code>, or <code>null</code> if parsing fails.</template>

Parses a locale-formatted date/time string into a Unix timestamp.

<template #example>

```javascript
import { time } from "system";

const ts = time.timeStampLocale("06/08/2026 14:30:05", "%d/%m/%Y %H:%M:%S", "en-US");
console.log("Parsed:", ts);
```

</template>
</MethodBox>

---

<MethodBox
  name="time.formatLocale(timestamp, format, locale)"
  badge="time"
  badgeType="core"
  returns="string"
  :parameters="[
    { name: 'timestamp', type: 'number', description: 'Unix timestamp in seconds.' },
    { name: 'format', type: 'string', description: 'strftime-style format string.' },
    { name: 'locale', type: 'string', description: 'Locale name for locale-aware output.' }
  ]"
>
<template #returns>The timestamp formatted as a locale-aware string.</template>

Formats a Unix timestamp using locale-aware rendering. Behaves like `timeStampFormat` but requires an explicit locale.

<template #example>

```javascript
import { time } from "system";

const ts = time.timeStamp();
const s = time.formatLocale(ts, "%A, %B %d %Y", "en-US");
console.log(s); // "Thursday, August 06 2026"
```

</template>
</MethodBox>

---

<MethodBox
  name="time.daylightSavingTime()"
  badge="time"
  badgeType="core"
  returns="boolean"
>
<template #returns><code>true</code> if the local system clock is currently in daylight saving time, <code>false</code> otherwise.</template>

Checks whether the local system time is currently observing daylight saving time (DST).

<template #example>

```javascript
import { time } from "system";

const dst = time.daylightSavingTime();
console.log("DST active:", dst);
```

</template>
</MethodBox>
