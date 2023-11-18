<template>
  <tiny-switch @change="handleChange"></tiny-switch>
</template>

<script>
import { Switch, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  methods: {
    handleChange(val) {
      Modal.message({ message: `开关值：${val}` })
    }
  }
}
</script>
