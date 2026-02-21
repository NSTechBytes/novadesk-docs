---
title: Work with environment variables via the env-variables module.
---

# env-variables Module
Environment variables in the Novadesk JavaScript API can be read through the env-variables module.

The env-variables module can be accessed using `require("env-variables")`.

```javascript
const envVariables = require("env-variables");
```

#### Table of Contents
[[toc]]

## `envVariables.getEnv(name)`

Retrieves the value of an environment variable or the full environment set.

### Parameters

- **`name`**
  - **Type**: `string`
  - **Description**: Name of the environment variable. When omitted, all environment variables are returned.

### Return Value

- **Type**: `string | Object | null`
- **Description**: Returns the environment variable value, `null` if it does not exist, or an object containing all environment variables when no name is provided.

::: tip
Omitting the parameter returns all environment variables.

```js
var allEnv = envVariables.getEnv();
```
:::

## Examples

### Getting a Specific Environment Variable

```javascript
const envVariables = require("env-variables");
var pathValue = envVariables.getEnv("PATH");
console.log("PATH:", pathValue);
```

### Getting All Environment Variables

```javascript
const envVariables = require("env-variables");
var allEnv = envVariables.getEnv();
console.log("Environment:", allEnv);
```
