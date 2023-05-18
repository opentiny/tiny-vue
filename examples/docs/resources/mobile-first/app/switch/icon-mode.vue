<template>
  <div>
    <tiny-switch types="icon"></tiny-switch>
    <tiny-switch v-model="value1" types="icon"></tiny-switch>
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
