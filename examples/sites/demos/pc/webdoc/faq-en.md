# FAQ

## 1, Popup element misaligned and flipped in wujie micro front-end

**Reason:** The popup element has a boundary detection logic, and in sub applications, the width and height of 'window' may be much smaller than that of the viewport,
therefore, it can misjudge boundaries, leading to issues such as flipping and misalignment.

**Solution:** Introducing 'popup global' configuration, assigning the 'window' of the main application to the 'viewportWindow' of the global configuration for boundary judgment

```js
import globalConfig from '@opentiny/vue-renderless/common/global'

// Determine if the app run in the sub application
if (window.__POWERED_BY_WUJIE__) {
  // In sub applications, the window of the main application can be obtained through window. parent
  globalConfig.viewportWindow = window.parent
}
```

## 2、In the 'Vitepress' project, reference the 'Opentiny' component package and use the 'Vitepress' packaging command: 'pnpm docs:build' ， Causing error: 'ERR_UNSUPPORTED_DIR_IMPORT'

**Reason:** Unable to find the 'js/css/...' files referenced within the component package waiting for suffix path, error statement: 'Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import "xxx" is not supported resolving ES modules imported from xxx/lib/index.js'

**Solution:** In the '. vitepress/config. js' file, add the following code:

```js
export default defineConfig({
  vite: {
    // ...
    ssr: {
      noExternal: [/@opentiny\//]
    }
  }
})
```

## 3、Configure `change-compat` to `true` to trigger the event

By default, when the code logic changes the value of the responsive variable, the component will not trigger the corresponding event. For example, when the `current-page` of the `Pager` is modified, the `current-change` event will not be triggered. The corresponding event will be triggered only after the interaction occurs.
You can set `change-compat` to `true` to trigger the event in the above situation.

```html
<template>
  <div>
    <tiny-button @click="currentPage = 1">change current-page</tiny-button>
    <tiny-pager
      :total="100"
      :current-page="currentPage"
      mode="number"
      change-compat
      @current-change="dataChangeTrigger"
    ></tiny-pager>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { TinyPager, TinyModal, TinyButton } from '@opentiny/vue'

  const currentPage = ref(10)

  const dataChangeTrigger = () => {
    TinyModal.message({
      message: 'current-change is triggered',
      status: 'info'
    })
  }
</script>

<style scoped>
  .tiny-button {
    margin-bottom: 12px;
  }
</style>
```
