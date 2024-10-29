<template>
  <tiny-numeric v-model="value" @blur="Eblur"></tiny-numeric>
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
    Eblur() {
      TinyModal.message({ message: 'blur 事件', status: 'info' })
    }
  }
}
</script>
