# FAQ

## 1, Popup element misaligned and flipped in wujie micro front-end

_Reason:_ The popup element has a boundary detection logic, and in sub applications, the width and height of 'window' may be much smaller than that of the viewport,
therefore, it can misjudge boundaries, leading to issues such as flipping and misalignment.

_Solution:_ Introducing popup global configuration, assigning the 'window' of the main application to the 'viewportWindow' of the global configuration for boundary judgment

```js
import globalConfig from '@opentiny/vue-renderless/common/global'

// Determine if the app run in the sub application
if (window.__POWERED_BY_WUJIE__) {
  // In sub applications, the window of the main application can be obtained through window. parent
  globalConfig.viewportWindow = window.parent
}
```

## 2、In Vitepress, reference the Opentiny component package and use Vitepress to package the command: pnpm docs:build， report errors: ERR_UNSUPPORTED_DIR_IMPORT

_Reason：_ Using Vitepress packaging, the suffix paths such as js/css related to file references in the component package cannot be found. Causing error: ERR_UNSUPPORTED_DIR_IMPORT

_Solution:_ Resolve the error issue by configuring the 'vitepress/config. js' file:

```js
export default defineConfig({
  vite: {
    ssr: {
      noExternal: [/@opentiny\//]
    }
  }
})
```
