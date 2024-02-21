<!--anchor:on-->

## Introduction Components

`TinyVue`Multiple component introduction, single component introduction, and complete introduction are supported.

### Multi-component introduction (recommended)

Multi-component reference is from the dependency package.`@opentiny/vue`Multiple components are referenced in. The following is an example (in the following figure)`Button`and`Alert`Component as an example):

```html
<template>
  <div>
    <tiny-button>TinyVue</tiny-button>
    <tiny-alert description="TinyVue"></tiny-alert>
  </div>
</template>

<script>
  import { Button, Alert } from '@opentiny/vue'

  export default {
    components: {
      TinyButton: Button,
      TinyAlert: Alert
    }
  }
</script>
```

### Single component introduction

`TinyVue`Each component can be installed and used independently. That is, only the dependency of a single component is installed and referenced independently.

by`Button`and`Alert`For example, run the following command to install the component:

```bash
yarn add @opentiny/vue-button @opentiny/vue-alert
#or
npm install @opentiny/vue-button @opentiny/vue-alert
```

Use in Pages`Button`and`Alert`An example of a component is as follows:

```html
<template>
  <div>
    <tiny-button>TinyVue</tiny-button>
    <tiny-alert description="TinyVue"></tiny-alert>
  </div>
</template>

<script>
  import Button from '@opentiny/vue-button'
  import Alert from '@opentiny/vue-alert'

  export default {
    components: {
      TinyButton: Button,
      TinyAlert: Alert
    }
  }
</script>
```

### Full introduction (not recommended)

Once the component is fully introduced, you do not need to import the component and register it locally on every page.`main.js`Global registration in, but as a result, it loses`tree-shaking`Capabilities. Redundant code is available after packaging.

`Vue 3.0`The following is an example of the complete introduction of the version:

```js
import { createApp } from 'vue'
import TinyVue from '@opentiny/vue'

const app = createApp(App)
app.use(TinyVue)
```

`Vue 2.0`The following is an example of the complete introduction of the version:

```js
import Vue from 'vue'
import TinyVue from '@opentiny/vue'

Vue.use(TinyVue)
```
