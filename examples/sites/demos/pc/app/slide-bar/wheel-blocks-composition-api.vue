<template>
  <tiny-slide-bar v-model="value" :init-blocks="initBlocks" :wheel-blocks="2"></tiny-slide-bar>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { SlideBar as TinySlideBar } from '@opentiny/vue'

const initBlocks = ref(4)
const value = ref([
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
