<template>
  <div class="demo-rate">
    <p>可清空的评分</p>
    <tiny-rate v-model="rate1" :clearable="true" show-text></tiny-rate>
    <p>当前值：{{ rate1 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from '@opentiny/vue'

const rate1 = ref(3)
</script>

<style scoped>
.demo-rate {
  padding: 20px;
}
</style>
