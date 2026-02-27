---
title: std core APIs (Windows)
---

# std Core APIs (Windows)

#### Table of Contents
[[toc]]

## `std.exit([status])`

Exits the process immediately.

### Parameters

- **`status`** (`number`, optional): Process exit code.

### Return Value

- Never returns (process terminates).

### Example

```javascript
// std.exit(0);
// Keep commented in docs examples to avoid terminating runtime.
```

## `std.gc()`

Runs QuickJS garbage collection.

### Return Value

- **Type**: `void`

### Example

```javascript
std.gc();
```

## `std.evalScript(code[, options])`

Evaluates JS source text.

### Parameters

- **`code`** (`string | module`): Source code string (or module object based on options).
- **`options`** (`object`, optional):
  - `backtrace_barrier` (`boolean`)
  - `eval_function` (`boolean`)
  - `eval_module` (`boolean`)
  - `compile_only` (`boolean`)
  - `compile_module` (`boolean`)
  - `async` (`boolean`)

### Return Value

- **Type**: `any`
- **Description**: Result of evaluated script/module, or compiled object in compile modes.

### Example

```javascript
const result = std.evalScript("1 + 2");
std.printf("eval=%d\n", result);
```

## `std.loadScript(filename)`

Loads and evaluates a script file.

### Parameters

- **`filename`** (`string`): Script path.

### Return Value

- **Type**: `any`
- **Description**: Evaluation result. Throws on load/eval errors.

### Example

```javascript
// Suppose D:/tmp/script.js contains: globalThis.X = 42;
std.loadScript("D:/tmp/script.js");
std.printf("X=%d\n", globalThis.X);
```

## `std.loadFile(filename[, options])`

Reads a file.

### Parameters

- **`filename`** (`string`)
- **`options`** (`object`, optional):
  - `binary` (`boolean`): If `true`, return `Uint8Array` instead of string.

### Return Value

- **Type**: `string | Uint8Array | null`
- **Description**:
  - string by default
  - `Uint8Array` when `binary: true`
  - `null` when file cannot be read

### Example (text)

```javascript
const text = std.loadFile("D:/tmp/a.txt");
std.printf("text loaded: %s\n", text !== null ? "yes" : "no");
```

### Example (binary)

```javascript
const bin = std.loadFile("D:/tmp/a.bin", { binary: true });
std.printf("bin length: %d\n", bin ? bin.length : 0);
```

## `std.writeFile(filename, data)`

Writes text or binary to a file.

### Parameters

- **`filename`** (`string`)
- **`data`** (`string | ArrayBuffer | TypedArray`)

### Return Value

- **Type**: `number`
- **Description**: `0` on success, `-1` on failure.

### Example (text)

```javascript
const rc1 = std.writeFile("D:/tmp/out.txt", "hello\n");
std.printf("write text rc=%d\n", rc1);
```

### Example (binary)

```javascript
const bytes = new Uint8Array([1, 2, 3, 4]);
const rc2 = std.writeFile("D:/tmp/out.bin", bytes.buffer);
std.printf("write bin rc=%d\n", rc2);
```

## `std.strerror(errno)`

Returns a human-readable error string for an error number.

### Parameters

- **`errno`** (`number`)

### Return Value

- **Type**: `string`

### Example

```javascript
std.printf("ENOENT => %s\n", std.strerror(std.Error.ENOENT));
```

## `std.printf(format, ...args)`

Prints formatted text to stdout.

### Return Value

- **Type**: `number`
- **Description**: Written character count.

### Example

```javascript
const n = std.printf("hello %s %d\n", "world", 123);
```

## `std.sprintf(format, ...args)`

Returns formatted string.

### Return Value

- **Type**: `string`

### Example

```javascript
const s = std.sprintf("x=%d", 7);
std.printf("%s\n", s);
```

## `std.puts(...args)`

Writes values to stdout without automatic newline.

### Return Value

- **Type**: `void`

### Example

```javascript
std.puts("A", " ", "B", "\n");
```
