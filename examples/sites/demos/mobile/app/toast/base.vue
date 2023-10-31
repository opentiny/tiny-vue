<template>
  <div>
    <button @click="showTextToast">show text toast</button>
    <button @click="showCorrectToast">show correct toast</button>
    <button @click="showErrorToast">show error toast</button>
  </div>
</template>

<script lang="jsx">
import { Toast } from '@opentiny/vue'

export default {
  methods: {
    showTextToast() {
      Toast.service({
        text: 'loading...',
        type: 'text',
        time: 2000
      })
    },
    showCorrectToast() {
      Toast.service({
        text: 'success',
        type: 'correct',
        time: 4000,
        zIndex: 101
      })
    },
    showErrorToast() {
      Toast.service({
        text: 'error',
        type: 'error',
        time: 2000,
        zIndex: 102
      })
    }
  }
}
</script>
