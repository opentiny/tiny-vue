<template>
  <div>
    <div class="content">
      <span>数量：</span>
      <tiny-numeric v-model="value" :min="0"> </tiny-numeric>
    </div>
    <div>单价：{{ price }}/斤</div>
    <div v-show="value ^ 0">总价：{{ price * value }}元</div>
  </div>
</template>

<script lang="jsx">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      size: 'small',
      value: 0,
      tatolPrice: 0,
      price: 10
    }
  }
}
</script>
