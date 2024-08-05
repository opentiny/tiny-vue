# @opentiny/vue-runtime

Provide the runtime resource address in `es` format for `TinyVue` component library.

## Import via CDN (available from v3.17.0)

In order to meet different business needs, `TinyVue` provides multiple forms of `runtime`:#

| Runtime name              | Instructions                                                      |
| ------------------------- | ----------------------------------------------------------------- |
| tiny-vue-pc.mjs           | A collection of components including all pc templates             |
| tiny-vue-mobile.mjs       | A collection of components including all mobile templates         |
| tiny-vue-mobile-first.mjs | A collection of components including all multi-terminal templates |
| tiny-vue-simple.mjs       | A collection of commonly used components                          |

```html
<head>
  <!-- 引入 vue 和 @opentiny/vue -->
  <script type="importmap">
    {
      "imports": {
        "vue": "https://registry.npmmirror.com/vue/3.4.27/files/dist/vue.runtime.esm-browser.js",
        "echarts": "https://registry.npmmirror.com/echarts/5.4.1/files/dist/echarts.esm.js",
        "@opentiny/vue": "https://registry.npmmirror.com/@opentiny/vue-runtime/3.17/files/dist3/tiny-vue-pc.mjs",
        "@opentiny/vue-icon": "https://registry.npmmirror.com/@opentiny/vue-runtime/3.17/files/dist3/tiny-vue-icon.mjs",
        "@opentiny/vue-locale": "https://registry.npmmirror.com/@opentiny/vue-runtime/3.17/files/dist3/tiny-vue-locale.mjs",
        "@opentiny/vue-common": "https://registry.npmmirror.com/@opentiny/vue-runtime/3.17/files/dist3/tiny-vue-common.mjs"
      }
    }
  </script>
  <!-- 引入 @opentiny/vue 样式 -->
  <link rel="stylesheet" href="https://registry.npmmirror.com/@opentiny/vue-theme/3.17/files/index.css" />
</head>
```
