<template>
  <tiny-numeric v-model="value" @focus="onFocus"></tiny-numeric>
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
    onFocus(event: FocusEvent) {
      Modal.message({ message: `${event.type} 事件`, status: 'info' })
    }
  }
}
</script>
