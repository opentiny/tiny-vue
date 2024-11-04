<template>
  <div class="demo-currency-class">
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
import { TinyCurrency, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency
  },
  data() {
    return {
      value: 'CNY'
    }
  },
  methods: {
    change(value) {
      TinyModal.message({ message: `当前值为 ${value}`, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-currency-class {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
