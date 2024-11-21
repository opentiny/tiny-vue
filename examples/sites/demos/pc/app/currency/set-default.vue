<template>
  <div class="demo-currency-class">
    <tiny-currency v-model="value" placeholder="请选择" set-default></tiny-currency>
  </div>
</template>

<script>
import { TinyCurrency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-currency-class {
  width: 280px;
}
</style>
