<template>
  <tiny-numeric v-model="value" @focus="Efocus"></tiny-numeric>
</template>

<script>
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
    Efocus() {
      TinyModal.message({ message: 'focus 事件', status: 'info' })
    }
  }
}
</script>
