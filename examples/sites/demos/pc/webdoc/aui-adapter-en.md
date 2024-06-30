## Adapter AUI

### Dependency mapping table

Currently, TinyVue is compatible with AUI. You only need to replace the package name and configure the style theme to get a consistent experience with AUI. The following is the mapping relationship between TinyVue packages and AUI packages.

| TinyVue package          | AUI package           |
| ------------------------ | --------------------- |
| @opentiny/vue            | @aurora/vue           |
| @opentiny/vue-renderless | @aurora/renderless    |
| @opentiny/vue-theme      | @aurora/theme         |
| @opentiny/vue-theme-saas | @aurora/theme-sass    |
| @opentiny/vue-icon       | @aurora/vue-icon      |
| @opentiny/vue-icon-saas  | @aurora/vue-icon-saas |

### Using Saas themes

#### background

- With the prosperity of the application ecology, especially the mobile application ecology, and the development of diversified device ecology, ‘multi-terminal’ and ‘multi-theme’ are put on the agenda;
- The theme solution launched by the original AUI is too bloated (users need to set a bunch of `cssvar` variables to customize the theme, because the colors are not unified, and the threshold for configuring multiple themes is relatively high). Later, it will be based on [tailwindcss](https:// github.com/tailwindlabs/tailwindcss) Collect theme variables (simplifying developer configuration) and engineer them to make it easier to customize multiple themes. Currently, there is a relatively mature theme solution in the industry [daisyui](https://github.com/saadeghi/daisyui).

In view of the above reasons, the `SaaS` theme is launched. If you want to experience the `SaaS` theme, you can make packaging configuration changes according to the following documents:

#### method one

Option 1 requires additional installation of the following dependencies:

- `@opentiny/vue-theme-saas` Theme will make minor adjustments to existing component styles without affecting the original DOM structure and API.
- `@opentiny/vue-icon-saas` is an icon component matching the `SaaS` theme style.
- `@opentiny/vue-design-saas` is the design specification configuration matching the theme style of `SaaS`.

1. Install the SaaS theme package:

```sh
yarn add @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-design-saas
# Or npm install @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-design-saas
```

2. Switch to the SaaS theme package:

```js
// (webpack) vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme-saas')
    config.resolve.alias.set('@opentiny/vue-icon', '@opentiny/vue-icon-saas')
  }
}

// (vite) vite.config.js
export default defineConfig({
  resolve: {
    alias: {
      '@opentiny/vue-theme': '@opentiny/vue-theme-saas',
      '@opentiny/vue-icon': '@opentiny/vue-icon-saas'
    }
  }
})
```

3. Switch to Saas design specification configuration:

```html
<script setup>
  import { ConfigProvider } from '@opentiny/vue'
  import designSaasConfig from '@opentiny/vue-design-saas'
</script>

<template>
  <!-- Inject saas design specification configuration -->
  <config-provider :design="designSaasConfig">
    <my-app></my-app>
  </config-provider>
</template>
```

### Method Two

Method 2 requires additional installation of the following dependencies:

- `@opentiny/vue-theme-saas` Theme will make minor adjustments to existing component styles without affecting the original DOM structure and API.
- `@opentiny/vue-icon-saas` is an icon component matching the `SaaS` theme style.
- `@opentiny/vue-common-saas` is an adaptation layer matching the `SaaS` theme style, and is inlined with the `@opentiny/vue-design-saas` of method 1.

1. Install the SaaS theme package:

```sh
yarn add @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-common-saas
# Or npm install @opentiny/vue-theme-saas @opentiny/vue-icon-saas @opentiny/vue-common-saas
```

2. Switch to the SaaS theme package:

```js
// (webpack) vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@opentiny/vue-theme', '@opentiny/vue-theme-saas')
    config.resolve.alias.set('@opentiny/vue-icon', '@opentiny/vue-icon-saas')
    config.resolve.alias.set('@opentiny/vue-common', '@opentiny/vue-common-saas')
  }
}

// (vite) vite.config.js
export default defineConfig({
  resolve: {
    alias: {
      '@opentiny/vue-theme': '@opentiny/vue-theme-saas',
      '@opentiny/vue-icon': '@opentiny/vue-icon-saas',
      '@opentiny/vue-common': '@opentiny/vue-common-saas'
    }
  }
})
```

## Multi-mode introduction

TinyVue provides PC and Mobile component libraries. The two component libraries rely on the same external dependency `@opentiny/vue`. The component with the same name switches the component mode through `tiny_mode`.
For SaaS business scenarios, TinyVue provides multi-terminal components based on `tailwind`.
Based on TinyVue, a new `multi-terminal mode` is added to support business switching of components with the same name. By default, the component with the same name is `desktop mode`, that is, `PC component`.

### Pattern classification

The AUI component library provides three component modes: `desktop mode`, `mobile mode`, `multi-terminal mode`

| Mode                | Mode introduction          | Mode configuration |
| ------------------- | -------------------------- | ------------------ |
| Desktop mode        | Pure PC                    | pc                 |
| mobile mode         | pure mobile                | mobile             |
| Multi-terminal mode | Multi-terminal consistency | mobile-first       |

### Mode switch

AUI component mode setting priority

`Single component switching` > `Mode transparent transmission` > `Global switching` > `Component default mode`

#### Single component switching

You can configure the `tiny_mode` attribute on the component tag, specify the component mode, and the corresponding template will be selected for rendering:

- Desktop mode: `pc`
- Mobile mode: `mobile`
- Multi-terminal mode: `mobile-first`

Reference examples are as follows:

```html
<tiny-button tiny_mode="mobile-first">Default button</tiny-button>
```

#### Global switch

By setting tiny_mode globally on Vue's prototype, you can specify the default mode for all components with the same name.
After importing the Vue dependency in the project entry `src/main.js` file, add the following configuration:

```js
// Vue 2.0
Vue.prototype.tiny_mode = { value: 'mobile-first' }

// Vue 3.0
app.config.globalProperties.tiny_mode = { value: 'mobile-first' }
```

#### Mode transparent transmission

If you want to switch modes in some areas of the page, such as card-level control,
You can add the `tiny_mode_root` attribute to the outer AUI component to transparently transmit the `tiny_mode` configuration of the current AUI component to all child AUI components.
The reference demo example is as follows:

```html
<template>
  <div>
    <tiny-layout>
      <tiny-row tiny_mode="pc" tiny_mode_root>
        <tiny-button>PC button</tiny-button>
        <tiny-button type="primary" native-type="submit">Primary button</tiny-button>
        <tiny-button type="success">Success button</tiny-button>
        <tiny-button type="info">Information button</tiny-button>
        <tiny-button type="warning">Warning button</tiny-button>
        <tiny-button type="danger">Danger button</tiny-button>
      </tiny-row>
      <tiny-row tiny_mode="mobile-first" tiny_mode_root>
        <tiny-button>Multi-terminal button</tiny-button>
        <tiny-button type="primary" native-type="submit">Primary button</tiny-button>
        <tiny-button type="success">Success button</tiny-button>
        <tiny-button type="info">Information button</tiny-button>
        <tiny-button type="warning">Warning button</tiny-button>
        <tiny-button type="danger">Danger button</tiny-button>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
  import { Button, Layout, Row } from '@opentiny/vue'

  export default {
    components: {
      TinyButton: Button,
      TinyLayout: Layout,
      TinyRow: Row
    }
  }
</script>
```
