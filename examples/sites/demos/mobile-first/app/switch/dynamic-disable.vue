<template>
  <div>
    <tiny-switch v-model="value1" disabled></tiny-switch>
    <tiny-switch v-model="value2" disabled></tiny-switch>
    <tiny-switch v-model="value1" disabled types="word"></tiny-switch>
    <tiny-switch v-model="value2" disabled types="word"></tiny-switch>
    <tiny-switch v-model="value1" disabled types="icon"></tiny-switch>
    <tiny-switch v-model="value2" disabled types="icon"></tiny-switch>
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
      value1: true,
      value2: false
    }
  }
}
</script>
