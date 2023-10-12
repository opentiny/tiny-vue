<template>
  <div>
    <tiny-switch></tiny-switch>
    <tiny-switch v-model="value1"></tiny-switch>
  </div>
</template>

<script>
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value1: true
    }
  }
}
</script>
