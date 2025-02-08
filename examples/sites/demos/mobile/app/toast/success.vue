<template>
  <div>
    <tiny-button @click="showCorrectToast">show correct toast</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { TinyToast, TinyButton } from '@opentiny/vue-mobile'

function showCorrectToast() {
  TinyToast.service({
    text: 'success',
    type: 'correct',
    time: 4000,
    zIndex: 101,
    timeout: () => {}
  })
}
</script>
