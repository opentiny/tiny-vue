<template>
  <tiny-numeric v-model="stepNum" :step="step" :empty-value="null" @change="onChange" allow-empty></tiny-numeric>
</template>

<script>
import { TinyNumeric, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      step: 2,
      stepNum: 1
    }
  },
  methods: {
    onChange(val, oldVal) {
      TinyModal.message({ message: `${val} ${oldVal}`, status: 'info' })
    }
  }
}
</script>
