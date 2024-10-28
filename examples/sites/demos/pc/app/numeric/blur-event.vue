<template>
  <tiny-numeric v-model="value" @blur="onBlur"></tiny-numeric>
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
    onBlur(event: FocusEvent) {
      TinyModal.message({ message: `${event.type} 事件`, status: 'info' })
    }
  }
}
</script>
