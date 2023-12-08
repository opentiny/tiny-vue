<template>
  <div>
    <tiny-button @click="showTextToast">show text toast</tiny-button>
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
    showTextToast() {
      Toast.service({
        text: 'Toast',
        type: 'text',
        time: 2000,
        timeout: () => {
          alert('timeout')
        }
      })
    }
  }
}
</script>
