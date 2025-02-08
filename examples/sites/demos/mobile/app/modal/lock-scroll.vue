<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁住滚动条不要遮罩层</tiny-button>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

function btnClick() {
  TinyModal.alert({
    message: '不锁住滚动条不要遮罩层',
    lockScroll: false,
    mask: false,
    tiny_mode: 'mobile'
  })
}
</script>
