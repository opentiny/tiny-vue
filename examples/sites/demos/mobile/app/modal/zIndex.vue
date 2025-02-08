<template>
  <tiny-button @click="btnClick" :reset-time="0">zIndex的值为500</tiny-button>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

function btnClick() {
  TinyModal.alert({ message: 'zIndex的值为500', zIndex: 500, tiny_mode: 'mobile' })
}
</script>
