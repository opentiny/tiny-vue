<template>
  <div>
    <tiny-button @click="showCorrectToast">show correct toast</tiny-button>
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
    showCorrectToast() {
      TinyToast.service({
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
