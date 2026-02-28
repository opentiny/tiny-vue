<!--anchor:on-->

# Development Example

This article is based on [Vite](https://cn.vitejs.dev/) Project example to show how to use `TinyVue` components.

## Building the Vite project

Create a `Vite` project:

```bash
yarn create vite
#or
npm init vite@latest
```

After creating the `Vite` project, go to the project directory and run the following commands to download and start the project:

```bash
yarn
#or
npm install

yarn dev
#or
npm run dev
```

After the browser is started, if the following interface is displayed, it indicates that the `Vite` project is started successfully.

<img src="@demos/resource/vite-vue.png" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14)" ><br><br>

## Install and use `TinyVue` Components

Run the following command to install the `Vue 3.0` version of `TinyVue` component library:

```bash
yarn add @opentiny/vue@3
#or
npm install @opentiny/vue@3
```

Then modify the `vite.config.js`, and add the following code:

```js {8-10}
//vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': { TINY_MODE: 'pc' }
  }
})
```

When the installation is complete, press `Ctrl + C` to interrupt the current service, and then run `yarn dev` or `npm run dev` to restart the service.

Next, modify the `App.vue` file, and add the following code (using the `Button` component as an example):

```js {5,11}
<script setup>
//This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { Button as TinyButton } from '@opentiny/vue'
</script>

<template>
  <img alt="Vue logo" src="@demos/resource/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <TinyButton type="success">Button</TinyButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

In the above code, `<script setup>` is a compiler syntax sugar used in single file components `SFC` with Composition `API`. For details, see [Vue official website](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup).

If you are not familiar with the above syntax, you can also use the standard `SFC` format:

```js
<template>
  <TinyButton type="success">Button</TinyButton>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
```

Alternatively, you can use single component import for `TinyVue` components:

```js
<template>
  <TinyButton type="success">Button</TinyButton>
</template>

<script>
import Button from '@opentiny/vue-button'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
```

The green button shown below should appear on the browser interface, indicating that the `TinyVue` component has been introduced and takes effect.

<img src="@demos/resource/tiny-vue.png" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14)" ><br><br>
