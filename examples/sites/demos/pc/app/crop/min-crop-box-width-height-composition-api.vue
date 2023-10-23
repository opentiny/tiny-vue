<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      :min-crop-box-width="100"
      :min-crop-box-height="100"
      :min-container-height="200"
      :min-container-width="800"
    ></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Crop as TinyCrop } from '@opentiny/vue'

const visible = ref(false)
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
</script>
