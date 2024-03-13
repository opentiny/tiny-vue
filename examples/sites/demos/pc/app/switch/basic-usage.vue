<template>
  <tiny-switch v-model="value"></tiny-switch>
</template>

<script>
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value: true
    }
  }
}
</script>
