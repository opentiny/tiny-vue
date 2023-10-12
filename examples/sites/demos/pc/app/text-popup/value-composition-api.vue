<template>
  <div>
    <tiny-text-popup v-model="value"></tiny-text-popup>
    <span style="margin-left: 14px">{{ value }}</span>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TextPopup as TinyTextPopup } from '@opentiny/vue'

const value = ref('我是 TextPopup 组件')
</script>
