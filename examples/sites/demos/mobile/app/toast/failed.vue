<template>
  <div>
    <tiny-button @click="showErrorToast">show error toast</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { TinyToast, TinyButton } from '@opentiny/vue-mobile'

function showErrorToast() {
  TinyToast.service({
    text: 'error',
    type: 'error',
    time: 2000,
    zIndex: 102
  })
}
</script>
