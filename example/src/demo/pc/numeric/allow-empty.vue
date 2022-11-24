<template>
  <tiny-numeric
    v-model="stepNum"
    :step="step"
    :min="1"
    :max="10"
    @change="onChange"
    circulate
    allow-empty
  ></tiny-numeric>
</template>

<script>
import { Numeric, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      step: 2,
      stepNum: 1
    }
  },
  methods: {
    onChange(val, oldVal) {
      Modal.message({ message: `${val} ${oldVal}`, status: 'info' })
    }
  }
}
</script>
