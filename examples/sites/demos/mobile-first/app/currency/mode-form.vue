<template>
  <div>
    <tiny-currency
      v-model="value"
      :visible="visible"
      @update:visible="visible = $event"
      mode="form"
      placeholder="请选择"
    ></tiny-currency>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script>
import { Currency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency
  },
  data() {
    return {
      visible: false,
      value: 'VUV'
    }
  }
}
</script>
