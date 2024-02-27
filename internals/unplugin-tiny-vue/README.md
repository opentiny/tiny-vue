# unplugin-tiny-vue

A auto import plugin. Same function as [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components).
No import and component registration required.

## Installation

```bash
npm i @opentiny/unplugin-tiny-vue -D

yarn i @opentiny/unplugin-tiny-vue -D
```

## Usage

vite

```js
// vite.config.js

import autoImportPlugin from '@opentiny/unplugin-tiny-vue'

export default {
  plugins: [autoImportPlugin()]
}
```
