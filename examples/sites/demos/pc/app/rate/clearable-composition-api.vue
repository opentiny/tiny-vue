<template>
  <div class="demo-rate">
    <p>普通评分</p>
    <tiny-rate v-model="rate1" show-text></tiny-rate>
    <p>当前值：{{ rate1 }}</p>

    <p>可清空的评分</p>
    <tiny-rate v-model="rate2" :clearable="true" show-text></tiny-rate>
    <p>当前值：{{ rate2 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from '@opentiny/vue'

const rate1 = ref(2)
const rate2 = ref(3)
</script>

<style scoped>
.demo-rate {
  padding: 20px;
}
</style>
