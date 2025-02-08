<template>
  <div class="mobile-mask-demo">
    <tiny-button @click="visible = true">点击展示遮罩层</tiny-button>
    <tiny-mask v-model:visible="visible" :z-index="zIndex"></tiny-mask>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyMask, TinyButton } from '@opentiny/vue-mobile'

const visible = ref(false)
const zIndex = ref(9999)
</script>

<style scoped>
.mobile-mask-demo {
  height: 100%;
  background: #f4f4f4;
}
</style>
