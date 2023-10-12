<template>
  <tiny-slide-bar v-model="list" :wheel-blocks="2" :init-blocks="initBlocks">
    <template #default="data">
      <span>标题：{{ data.slotData.title }}</span>
      <div>语言：{{ data.slotData.lang }}</div>
    </template>
  </tiny-slide-bar>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { SlideBar as TinySlideBar } from '@opentiny/vue'

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
</script>
