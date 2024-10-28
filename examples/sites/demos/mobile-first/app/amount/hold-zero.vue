<template>
  <tiny-amount
    v-model="value"
    :digits="4"
    :max-len="12"
    :hold-zero="false"
    @change="handleChange"
    :rounding="false"
  ></tiny-amount>
</template>

<script>
import { TinyAmount, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyAmount
  },
  data() {
    return {
      value: 888.88
    }
  },
  methods: {
    handleChange(value) {
      TinyModal.message({ message: `当前值为 ${value.amount}`, status: 'info' })
    }
  }
}
</script>
