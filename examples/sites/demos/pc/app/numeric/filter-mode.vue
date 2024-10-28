<template>
  <div>
    <tiny-numeric v-model="value" title="请选择" shape="filter" clearable blank></tiny-numeric>
  </div>
</template>

<script>
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1
    }
  }
}
</script>
