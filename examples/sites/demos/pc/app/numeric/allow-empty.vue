<template>
  <tiny-numeric v-model="value" allow-empty @change="onChange"></tiny-numeric>
</template>

<script lang="ts">
import { Numeric, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1,
      step: 2
    }
  },
  methods: {
    onChange(val: number | undefined, oldVal: number | undefined) {
      Modal.message({ message: `${val} ${oldVal}`, status: 'info' })
    }
  }
}
</script>
