# @opentiny/vue-renderless

Provides a rendering-free logic layer for the `TinyVue` component.

## You can customize the global configuration of some components

### Modify the popup window starting level (z-index)

Add the following code to the entry file `main.js`:

```js
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'

// Set the starting level to 3000
PopupManager.zIndex = 3000
```
