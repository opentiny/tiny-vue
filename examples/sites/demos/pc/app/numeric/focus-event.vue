<template>
  <tiny-numeric v-model="value" @focus="onFocus"></tiny-numeric>
</template>

<script lang="ts">
import { TinyNumeric, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    onFocus(event: FocusEvent) {
      TinyModal.message({ message: `${event.type} 事件`, status: 'info' })
    }
  }
}
</script>
