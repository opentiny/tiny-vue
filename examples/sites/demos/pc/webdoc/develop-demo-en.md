<!--anchor:on-->

## Development Example

This article is based on[Vite](https://cn.vitejs.dev/) Project example to show how to use`TinyVue`components.

### Building the Vite project

Create a`Vite`Works:

```bash
yarn create vite
#or
npm init vite@latest
```

Created`Vite`Go to the project directory and run the following commands to download and start the project:

```bash
yarn
#or
npm install

yarn dev
#or
npm run dev
```

After the browser is started, if the following interface is displayed, it indicates that`Vite`The project is started successfully.

<img src="@demos/resource/vite-vue.png" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14)" ><br><br>

### Install and use`TinyVue`Components

Run the following command to install the`Vue 3.0`version of`TinyVue`Component library:

```bash
yarn add @opentiny/vue@3
#or
npm install @opentiny/vue@3
```

Then modify the`vite.config.js`, add the following code highlighted section:

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

When the installation is complete, press`Ctrl + C`Interrupt the current service, and then perform`yarn dev #npm run dev`Restart the service.

Next, modify the`App.vue`file, add the section highlighted by the following code (in the`Button`Component as an example):

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

in the above writing`<script setup>`is in the single file component`SFC`Combinations used in the medium`API`Compiler syntax. For details, see.[Vue official website](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) .

If you are not familiar with the above syntax, you can also use the standard`SFC`Format:

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

Alternatively, a single component can be used.`TinyVue`Components:

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

The green button shown below should appear on the browser interface, indicating that`TinyVue`The component has been introduced and takes effect.

<img src="@demos/resource/tiny-vue.png" class="image" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14)" ><br><br>
