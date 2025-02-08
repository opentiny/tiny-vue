<template>
  <tiny-button @click="btnClick" :reset-time="0">不允许重复点击</tiny-button>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

function btnClick() {
  TinyModal.message({ message: '不允许重复点击', id: 'unique', tiny_mode: 'mobile' })
}
</script>
