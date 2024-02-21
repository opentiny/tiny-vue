<template>
  <div>
    <tiny-currency
      v-model="value"
      :drop-style="{ width: '200px', 'min-width': '200px' }"
      label="请选择"
      shape="filter"
      :clearable="false"
      @change="change"
    ></tiny-currency>
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
      value: 'CNY'
    }
  },
  methods: {
    change(value) {
      Modal.message({ message: `当前值为 ${value}`, status: 'info' })
    }
  }
}
</script>
