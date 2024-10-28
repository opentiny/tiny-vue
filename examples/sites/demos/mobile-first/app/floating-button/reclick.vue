<template>
  <tiny-floating-button reset-time="1000" position="center" @click="touchstartHandler"></tiny-floating-button>
</template>

<script>
import { TinyFloatingButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyFloatingButton
  },
  methods: {
    touchstartHandler() {
      TinyModal.message('click')
    }
  }
}
</script>
