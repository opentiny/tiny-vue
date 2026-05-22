<template>
  <tiny-numeric v-model="value" placeholder="请输入非空数值" :parse-input="parseInput"></tiny-numeric>
</template>

<script lang="ts">
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    parseInput(value: string) {
      // 允许输入千分符， _ 分隔符等，比如  1,000.00 或者 1_000.00
      return value.replaceAll(',', '').replaceAll('_', '')
    }
  }
}
</script>
