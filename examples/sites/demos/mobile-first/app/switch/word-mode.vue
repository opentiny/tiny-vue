<template>
  <div>
    <tiny-switch types="word"></tiny-switch>
    <tiny-switch v-model="value1" types="word"></tiny-switch>
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
