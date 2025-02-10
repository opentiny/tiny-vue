<template>
  <div>
    <tiny-button @click="showTextToast">show text toast</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { TinyToast, TinyButton } from '@opentiny/vue-mobile'

function showTextToast() {
  TinyToast.service({
    text: 'Toast',
    type: 'text',
    time: 2000,
    timeout: () => {
      alert('timeout')
    }
  })
}
</script>
