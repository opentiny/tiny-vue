<template>
  <div>
    <tiny-button @click="replaceHandle" style="margin-bottom: 20px">替换图片</tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible" style="margin-bottom: 20px"></tiny-button>
    <tiny-crop
      ref="cropRef"
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      zoomable
      :rotatable="false"
    ></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Crop as TinyCrop, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const cropRef = ref()
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function replaceHandle() {
  cropRef.value.replace(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`)
}
</script>
