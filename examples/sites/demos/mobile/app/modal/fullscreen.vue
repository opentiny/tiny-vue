<template>
  <tiny-button @click="btnClick" :reset-time="0">最大化显示</tiny-button>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

function btnClick() {
  TinyModal.alert({ message: '最大化显示', fullscreen: true, tiny_mode: 'mobile' })
}
</script>
