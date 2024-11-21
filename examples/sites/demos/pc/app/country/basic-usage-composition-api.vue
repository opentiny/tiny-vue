<template>
  <div class="demo-country-class">
    <tiny-country v-model="value" @change="change"></tiny-country>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyCountry, TinyModal } from '@opentiny/vue'

const value = ref('')

function change(value) {
  TinyModal.message({ message: '当前选中国家：' + value, status: 'info' })
}
</script>

<style scoped>
.demo-country-class {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
