<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl"></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Crop as TinyCrop } from '@opentiny/vue'

const visible = ref(false)
const imgUrl = ref(`https://res.hc-cdn.com/tiny-vue-web-doc/3.18.0.20240821112032/static/images/mountain.png`)
</script>
