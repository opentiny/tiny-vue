<template>
  <tiny-numeric v-model="value" placeholder="请输入非空数值"></tiny-numeric>
</template>

<script lang="ts">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1
    }
  }
}
</script>
