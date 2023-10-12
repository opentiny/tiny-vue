<!--anchor:on-->

## Installation

`TinyVue`The component library also supports`Vue 2.0`and`Vue 3.0`Framework, unified dependency package:`@opentiny/vue`, please install different versions to fit your project according to the table below:

| Project Vue Version | Component Library Version |
| ------------------- | ------------------------- |
| Vue2.x              | @opentiny/vue@2.x         |
| Vue3.x              | @opentiny/vue@3.x         |

Currently, TinyVue does not support Vue2.7. When the project uses the Vue2.0 framework, the recommended version format is `"vue": "~2.6.14", "vue-template-compiler": "~2.6.14"`.

### New Project Configuration

In the root directory of the project, open the console and execute the following command to`Vue 3.0`Project Installation`TinyVue`Component library:

```bash
yarn add @opentiny/vue@3
#or
npm install @opentiny/vue@3
```

Alternatively, run the following command.`Vue 2.0`Project Installation of`TinyVue`Component library:

```bash
yarn add @opentiny/vue@2
#or
npm install @opentiny/vue@2
```

If it's`Vite`After the dependency is installed, modify the project.`vite.config.js`, add the following code highlighted section:

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

### Import through CDN

In order to experience TinyVue components faster, you can also import TinyVue directly into the HTML page through CDN.

```html
<head>
  <!-- Import vue and @opentiny/vue -->
  <script type="importmap">
    {
      "imports": {
        "vue": "https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js",
        "@opentiny/vue": "https://unpkg.com/@opentiny/vue@3.9.1/runtime/tiny-vue.mjs",
        "@opentiny/vue-common": "https://unpkg.com/@opentiny/vue@3.9.1/runtime/tiny-vue-common.mjs",
        "@opentiny/vue-icon": "https://unpkg.com/@opentiny/vue@3.9.1/runtime/tiny-vue-icon.mjs",
        "@opentiny/vue-locale": "https://unpkg.com/@opentiny/vue@3.9.1/runtime/tiny-vue-locale.mjs"
      }
    }
  </script>
  <!-- Import @opentiny/vue style -->
  <link rel="stylesheet" href="https://unpkg.com/@opentiny/vue-theme/index.css" />
</head>
```

Then you can import TinyVue and register the TinyVue plug-in globally through the use method of the app instance, so that TinyVue components can be used in the template template.

```html
<body>
  <div id="app"></div>
  <script type="module">
    import { createApp } from 'vue'
    // Import @opentiny/vue component
    import TinyVue from '@opentiny/vue'

    createApp({
      template: `
        <tiny-button>TinyVue</tiny-button>
        <tiny-alert description="TinyVue"></tiny-alert>
      `
    })
      // Register @opentiny/vue component
      .use(TinyVue)
      .mount('#app')
  </script>
</body>
```

### Historical Project Upgrade

due to`TinyVue`of a large number of projects and`@opentiny/vue2`or`@opentiny/vue3`The two packages will not be upgraded. For projects that are still being developed or maintained, you are advised to upgrade the latest versions using either of the following methods:

1. standard upgrade method

- remove`package.json`medium`@opentiny/vue2`or`@opentiny/vue3`Once dependent, install the correct`@opentiny/vue`version.
- In the project directory, search for`@opentiny/vue2`or`@opentiny/vue3`for the name, replaced with`@opentiny/vue`.
- If you use component internationalization, refer to`Internationalization`document of the, and the key value`zh_CN`Modified to`zhCN`, the key value`en_US`Modified to`enUS`.
- Rerun the project and verify the functionality!

2. Dependent package alias upgrade method

- remove`package.json`medium`@opentiny/vue2`or`@opentiny/vue3`Once dependent, install the correct`@opentiny/vue`Version
- In the`Vite`engineering`vite.config.js`In, add the following code highlighted section:

```js {3-6}
export default defineConfig({
  //......
  resolve: {
    alias: {
      "@opentiny/vue2": "@opentiny/vue"
    }
  }
}）
```

- If you use component internationalization, refer to`Internationalization`document of the, and the key value`zh_CN`Modified to`zhCN`, the key value`en_US`Modified to`enUS`.
- Rerun the project and verify the functionality!

If you encounter other difficulties in project upgrade, you can create a new issue on github to provide feedback (`https://github.com/opentiny/tiny-vue/issues`)

<br />
