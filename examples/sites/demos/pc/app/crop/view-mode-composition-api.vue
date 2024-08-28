<template>
  <div>
    <tiny-button text="图片裁剪" @click="visible = !visible"></tiny-button>
    <tiny-button text="切换模式" @click="changeMode"></tiny-button>
    <tiny-crop
      :cropvisible="visible"
      @update:cropvisible="visible = $event"
      :src="imgUrl"
      :view-mode="num"
      :key="num"
    ></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Crop as TinyCrop, Modal } from '@opentiny/vue'

const visible = ref(false)
let num = ref(0)
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
function changeMode() {
  num.value = (num.value + 1) % 4
  Modal.message({ message: '模式:' + num.value })
}
</script>
