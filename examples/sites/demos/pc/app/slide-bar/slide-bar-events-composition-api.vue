<template>
  <tiny-slide-bar
    v-model="list"
    :init-blocks="initBlocks"
    @click="handleClick"
    @before-click="beforeClick"
  ></tiny-slide-bar>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { SlideBar as TinySlideBar, Modal } from '@opentiny/vue'

const initBlocks = ref(4)
const list = ref([
  { title: 'a', lang: 'en_US' },
  { title: 'b', lang: 'zh-CN' },
  { title: 'c', lang: 'en_US' },
  { title: 'd', lang: 'en_US' },
  { title: 'e', lang: 'en_US' },
  { title: 'f', lang: 'en_US' },
  { title: 'g', lang: 'en_US' },
  { title: 'h', lang: 'en_US' },
  { title: 'i', lang: 'en_US' }
])

function handleClick(data, index) {
  Modal.message({
    message: `click 事件，回调参数：${data.title}, ${index}`,
    status: 'info'
  })
}

function beforeClick() {
  Modal.message({ message: 'before-click 事件', status: 'info' })
}
</script>
