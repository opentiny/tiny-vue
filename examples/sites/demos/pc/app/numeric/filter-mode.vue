<template>
  <div>
    <tiny-numeric v-model="value" title="请选择" shape="filter" clearable blank></tiny-numeric>
  </div>
</template>

<script>
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
