<template>
  <tiny-floating-button reset-time="1000" position="center" @click="touchstartHandler"></tiny-floating-button>
</template>

<script>
import { FloatingButton, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyFloatingButton: FloatingButton
  },
  methods: {
    touchstartHandler() {
      Modal.message('click')
    }
  }
}
</script>
