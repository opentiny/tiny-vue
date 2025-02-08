<template>
  <tiny-button @click="btnClick" :reset-time="0">点击遮罩层可以关闭</tiny-button>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

function btnClick() {
  TinyModal.alert({ message: '点击遮罩层可以关闭', maskClosable: true, tiny_mode: 'mobile' })
}
</script>
