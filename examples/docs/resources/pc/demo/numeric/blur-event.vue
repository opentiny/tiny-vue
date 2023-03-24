<template>
  <tiny-numeric v-model="value" @blur="Eblur"></tiny-numeric>
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
    Eblur() {
      Modal.message({ message: 'blur 事件', status: 'info' })
    }
  }
}
</script>
