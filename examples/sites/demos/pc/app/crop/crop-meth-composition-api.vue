<template>
  <div>
    <tiny-button :text="title" @click="toggleEnable"></tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-crop ref="cropRef" :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl"></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Crop as TinyCrop } from '@opentiny/vue'

const visible = ref(false)
const cropRef = ref()
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
const title = ref('禁用裁剪框')
const enabled = ref(true)

function toggleEnable() {
  enabled.value = !enabled.value
  if (enabled.value) {
    cropRef.value.enable() // 启用裁剪框
    title.value = '禁用裁剪框'
  } else {
    cropRef.value.disable()
    title.value = '启用裁剪框'
  }
}
</script>
