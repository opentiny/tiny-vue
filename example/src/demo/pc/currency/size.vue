<template>
  <div>
    <tiny-currency v-model="value" size="medium" placeholder="请选择" @change="change"></tiny-currency>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script>
import { Currency, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency
  },
  data() {
    return {
      value: 'VUV'
    }
  },
  methods: {
    change(value) {
      Modal.message({ message: `当前值为 ${value}`, status: 'info' })
    }
  }
}
</script>
