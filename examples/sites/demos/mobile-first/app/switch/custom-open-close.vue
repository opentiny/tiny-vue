<template>
  <tiny-switch v-model="value" types="word">
    <template #open>
      <span>是</span>
    </template>
    <template #close>
      <span>否</span>
    </template>
  </tiny-switch>
</template>

<script>
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value: false
    }
  }
}
</script>
