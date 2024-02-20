<template>
  <div class="tiny-demo">
    <div>
      <div>可清空时，清空输入框后，返回值为：{{ value1 }}</div>
      <tiny-amount v-model="value1" num-allow-empty></tiny-amount>
    </div>
    <br />
    <div>
      <span>默认情况，清空输入框后，返回值为：{{ value2 }}</span>
      <tiny-amount v-model="value2"></tiny-amount>
    </div>
  </div>
</template>

<script>
import { Amount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      value1: 88.88,
      value2: 88.88
    }
  }
}
</script>
