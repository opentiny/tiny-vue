<template>
  <tiny-numeric v-model="value" @focus="Efocus"></tiny-numeric>
</template>

<script lang="jsx">
import { Numeric, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    Efocus() {
      Modal.message({ message: 'focus 事件', status: 'info' })
    }
  }
}
</script>
