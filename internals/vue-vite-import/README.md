# vite-plugin-babel-import

A TinyVue vite import plugin.

## install

```bash
npm i @opentiny/vue-vite-import -D
```

## Example

```js
import { ButtonGroup } from '@opentiny/vue';
import { iconShare } from '@opentiny/vue-icon'

        ↓ ↓ ↓ ↓ ↓ ↓

import ButtonGroup from '@opentiny/vue-button-group';
import iconShare from '@opentiny/vue-icon/lib/icon-share.js'
```

## Usage

```js
// vite.config.js

// ...
import importPlugin from '@opentiny/vue-vite-import'
// ...
export default {
  // ...
  plugins: [
    // ...
    importPlugin(
      [
        {
          libraryName: '@opentiny/vue',
          split: '-' // 自定义分隔符
        },
        {
          libraryName: '@opentiny/vue-icon',
          customName: (name) => {
            // 自定义模块名称
            return `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
          }
        }
      ],
      'pc'
    ) // 第二个参数可选，表示只打包pc或者移动模板 pc | mobile | undefined
  ]
  // ...
}
```
