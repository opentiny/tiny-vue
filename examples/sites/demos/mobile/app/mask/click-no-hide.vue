<template>
  <div class="mobile-mask-demo">
    <tiny-button @click="visible = true">点击显示遮罩层</tiny-button>

    <tiny-mask v-model:visible="visible" :cancel-touch="true">
      <tiny-button @click="visible = false">点击此处关闭遮罩层</tiny-button>
    </tiny-mask>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyMask, TinyButton } from '@opentiny/vue-mobile'

const visible = ref(false)
</script>

<style scoped>
.mobile-mask-demo {
  height: 100%;
  background: #f4f4f4;
}
</style>
