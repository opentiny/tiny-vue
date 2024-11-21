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
import { TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch
  },
  data() {
    return {
      value1: true,
      value2: false
    }
  }
}
</script>
