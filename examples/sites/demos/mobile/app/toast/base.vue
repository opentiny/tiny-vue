<template>
  <div>
    <tiny-button @click="showTextToast">show text toast</tiny-button>
  </div>
</template>

<script lang="jsx">
import { TinyToast, TinyButton } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton,
    TinyToast
  },
  methods: {
    showTextToast() {
      TinyToast.service({
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
