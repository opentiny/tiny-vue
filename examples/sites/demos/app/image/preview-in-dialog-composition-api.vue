<template>
  <div>
    <tiny-button @click="visible3 = true"> 弹出Dialog </tiny-button>
    <tiny-dialog-box :visible="visible3" @update:visible="visible3 = $event" :draggable="true" title="消息" width="30%">
      <div>
        <tiny-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></tiny-image>
      </div>
      <template #footer>
        <tiny-button hue="primary" @click="visible3 = false"> 确 定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox, Image as TinyImage } from '@opentiny/vue'

const visible3 = ref(false)
const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
const srcList = ref([
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
])
</script>
