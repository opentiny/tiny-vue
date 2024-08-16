# @opentiny/vue-runtime

为 `TinyVue` 组件库提供 `es` 格式的运行时资源地址。

## 通过 CDN 方式引入 (v3.17.0开始提供使用)

为了应对不同的业务需要，`TinyVue` 提供多种形态的 `runtime`:#

| Runtime 名称              | 使用说明                   |
| ------------------------- | -------------------------- |
| tiny-vue-pc.mjs           | 包含所有pc模板的组件集合   |
| tiny-vue-mobile.mjs       | 包含所有移动模板的组件集合 |
| tiny-vue-mobile-first.mjs | 包含所有多端模板的组件集合 |
| tiny-vue-simple.mjs       | 包含常用组件的集合         |

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
