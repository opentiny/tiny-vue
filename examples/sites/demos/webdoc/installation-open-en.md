<!--anchor:on-->

## Installation

`TinyVue`The component library also supports`Vue 2.0`and`Vue 3.0`Framework, unified dependency package`@opentiny/vue`, please install different versions to fit your project according to the table below:

| Project Vue Version | Component Library Version |
| ------------------- | ------------------------- |
| Vue2.x              | @opentiny/vue@2.x         |
| Vue3.x              | @opentiny/vue@3.x         |

### New Project Configuration

In the root directory of the project, open the console and execute the following command to`Vue 3.0`Project Installation`TinyVue`Component library:

```bash
yarn add @opentiny/vue@3
#or
npm install @opentiny/vue@3
```

Alternatively, run the following command to set`Vue 2.0`Project Installation`TinyVue`Component library:

```bash
yarn add @opentiny/vue@2
#or
npm install @opentiny/vue@2
```

If it's`Vite`Project, after installation, modify the project's`vite.config.js`, add the following code highlighted section:

```js {8-10}
//vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': { ...process.env }
  }
})
```
