---
title: std environment APIs (Windows)
---

# std Environment APIs (Windows)

#### Table of Contents
[[toc]]

## `std.getenv(name)`

Gets an environment variable.

### Parameters

- **`name`** (`string`)

### Return Value

- **Type**: `string | undefined`
- **Description**: Value when present, otherwise `undefined`.

### Example

```javascript
const path = std.getenv("PATH");
std.printf("PATH exists: %s\n", path ? "yes" : "no");
```

## `std.setenv(name, value)`

Sets an environment variable for current process environment.

### Parameters

- **`name`** (`string`)
- **`value`** (`string`)

### Return Value

- **Type**: `void`

### Example

```javascript
std.setenv("NOVADESK_TEST", "1");
```

## `std.unsetenv(name)`

Removes an environment variable.

### Parameters

- **`name`** (`string`)

### Return Value

- **Type**: `void`

### Example

```javascript
std.unsetenv("NOVADESK_TEST");
```

## `std.getenviron()`

Returns an object of environment variables.

### Return Value

- **Type**: `Record<string, string>`
- **Description**: Key-value object of current environment.

### Example

```javascript
const env = std.getenviron();
std.printf("COMSPEC=%s\n", env.COMSPEC || "");
```

## Notes

- Environment mutations apply to current process environment.
- Child processes spawned after updates can observe changed values.
