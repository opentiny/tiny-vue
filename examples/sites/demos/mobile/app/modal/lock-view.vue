<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁界面不要遮罩层</tiny-button>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

function btnClick() {
  TinyModal.alert({
    message: '不锁界面不要遮罩层',
    lockView: false,
    mask: false,
    tiny_mode: 'mobile'
  })
}
</script>
