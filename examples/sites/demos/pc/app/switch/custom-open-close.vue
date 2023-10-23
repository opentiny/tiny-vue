<template>
  <tiny-switch v-model="value" show-text>
    <template #open>
      <span>是</span>
    </template>
    <template #close>
      <span>否</span>
    </template>
  </tiny-switch>
</template>

<script lang="jsx">
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
