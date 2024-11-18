<template>
  <tiny-switch v-model="value"></tiny-switch>
</template>

<script>
import { TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch
  },
  data() {
    return {
      value: true
    }
  }
}
</script>
