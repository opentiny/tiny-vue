<template>
  <tiny-numeric v-model="value" @blur="onBlur"></tiny-numeric>
</template>

<script lang="ts">
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
    onBlur(event: FocusEvent) {
      Modal.message({ message: `${event.type} 事件`, status: 'info' })
    }
  }
}
</script>
