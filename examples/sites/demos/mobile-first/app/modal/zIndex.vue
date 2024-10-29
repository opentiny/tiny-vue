<template>
  <tiny-button @click="btnClick" :reset-time="0">zIndex的值为500</tiny-button>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({ message: 'zIndex的值为500', zIndex: 500 })
    }
  }
}
</script>
