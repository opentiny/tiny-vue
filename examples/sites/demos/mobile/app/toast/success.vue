<template>
  <div>
    <tiny-button @click="showCorrectToast">show correct toast</tiny-button>
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
    showCorrectToast() {
      Toast.service({
        text: 'success',
        type: 'correct',
        time: 4000,
        zIndex: 101,
        timeout: () => {}
      })
    }
  }
}
</script>
