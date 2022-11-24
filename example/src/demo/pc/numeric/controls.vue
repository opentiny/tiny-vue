<template>
  <tiny-numeric
    v-model="stepNum"
    :controls="controls"
    :label="label"
    name="name"
  ></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      label: '关联文字',
      controls: false,
      stepNum: 2
    }
  }
}
</script>
