<template>
  <div>
    <tiny-switch></tiny-switch>
    <tiny-switch v-model="value1"></tiny-switch>
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
      value1: true
    }
  }
}
</script>
