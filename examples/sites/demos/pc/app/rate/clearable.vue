<template>
  <div class="demo-rate">
    <p>可清空的评分</p>
    <tiny-rate v-model="rate1" :clearable="true" show-text></tiny-rate>
    <p>当前值：{{ rate1 }}</p>
  </div>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate1: 3
    }
  }
}
</script>

<style scoped>
.demo-rate {
  padding: 20px;
}
</style>
