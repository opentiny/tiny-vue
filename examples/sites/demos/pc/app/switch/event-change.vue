<template>
  <tiny-switch @change="handleChange"></tiny-switch>
</template>

<script>
import { TinySwitch, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySwitch
  },
  methods: {
    handleChange(val) {
      TinyModal.message({ message: `开关值：${val}`, status: 'info' })
    }
  }
}
</script>
