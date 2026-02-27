---
title: std utility APIs (Windows)
---

# std Utility APIs (Windows)

Import:

```javascript
import * as std from "std";
```

#### Table of Contents
[[toc]]

## `std.evalScript(code, options?)`

Evaluates source code at runtime.

### Parameters

- **`code`** (`string | module`): Source text (or module object when using module-eval path).
- **`options`** (`object`, optional):
  - `backtrace_barrier` (`boolean`)
  - `eval_function` (`boolean`)
  - `eval_module` (`boolean`)
  - `compile_only` (`boolean`)
  - `compile_module` (`boolean`)
  - `async` (`boolean`)

### Return Value

- **Type**: `any`
- **Description**: Evaluation/compilation result.

### Example

```javascript
import * as std from "std";

const value = std.evalScript("40 + 2");
std.printf("value=%d\n", value);
```

## `std.loadScript(filename)`

Loads a script file and evaluates it in global context.

### Parameters

- **`filename`** (`string`): Script file path.

### Return Value

- **Type**: `any`
- **Description**: Result of evaluated script.

### Errors

- Throws if file cannot be loaded or script evaluation fails.

### Example

```javascript
import * as std from "std";

// D:/tmp/demo.js => globalThis.DEMO_VALUE = 123;
std.loadScript("D:/tmp/demo.js");
std.printf("demo=%d\n", globalThis.DEMO_VALUE);
```

## `std.parseExtJSON(text)`

Not available in the current Novadesk QuickJS build.

### Status

- `quickjs-libc.c` exports `evalScript`, `loadScript`, and `urlGet`, but no `parseExtJSON`.
- Calling `std.parseExtJSON` will fail unless added by another runtime layer.

### Fallback Example

```javascript
import * as std from "std";

function parseExtJSONFallback(text) {
    // Standard JSON fallback (no extended JSON features).
    return JSON.parse(text);
}
```

## `std.urlGet(url, options?)`

Fetches URL content via runtime helper (`curl` command under the hood in this build).

### Parameters

- **`url`** (`string`)
- **`options`** (`object`, optional):
  - `binary` (`boolean`): return binary data (`ArrayBuffer`-like value) instead of string response.
  - `full` (`boolean`): return object with metadata.

### Return Value

- If `full` is **not** set:
  - **Type**: `string | ArrayBuffer | null`
- If `full` is `true`:
  - **Type**: `object`
  - **Shape**:
    - `response`: `string | ArrayBuffer | null`
    - `responseHeaders`: `string` (present when response is not null)
    - `status`: `number` (present when response is not null)

### Behavior Notes

- Without `full`, non-2xx HTTP responses return `null`.
- With `full`, you always get an object; failed/non-success requests can have `response: null`.

### Example (simple)

```javascript
import * as std from "std";

const body = std.urlGet("https://example.com");
if (body === null) {
    std.printf("request failed\n");
} else {
    std.printf("length=%d\n", body.length);
}
```

### Example (full response)

```javascript
import * as std from "std";

const res = std.urlGet("https://example.com", { full: true });
if (res.response !== null) {
    std.printf("status=%d\n", res.status);
    std.printf("headers=%s\n", res.responseHeaders);
}
```
