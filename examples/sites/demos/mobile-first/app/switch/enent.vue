<template>
  <tiny-switch @change="enent"></tiny-switch>
</template>

<script>
import { TinySwitch, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySwitch
  },
  methods: {
    enent(val) {
      TinyModal.message({ message: `${val}`, status: 'info' })
    }
  }
}
</script>
