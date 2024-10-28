<template>
  <tiny-amount v-model="value" :digits="1" :max-len="12" @change="handleChange" :rounding="false"></tiny-amount>
</template>

<script>
import { TinyAmount, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyAmount
  },
  data() {
    return {
      value: 888888888888.88
    }
  },
  methods: {
    handleChange(value) {
      TinyModal.message({ message: `当前值为 ${value.amount}`, status: 'info' })
    }
  }
}
</script>
