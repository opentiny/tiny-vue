<template>
  <div>
    <tiny-button @click="showErrorToast">show error toast</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Toast, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyToast: Toast
  },
  methods: {
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
