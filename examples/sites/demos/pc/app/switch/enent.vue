<template>
  <tiny-switch @change="enent"></tiny-switch>
</template>

<script lang="jsx">
import { Switch, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  methods: {
    enent(val) {
      Modal.message({ message: `${val}`, status: 'info' })
    }
  }
}
</script>
