<template>
  <div class="demo-date-panel-wrap">
    <div>{{ value }}</div>
    <tiny-date-panel v-model="value" :disabledDate="disabledDate"></tiny-date-panel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel } from '@opentiny/vue'

const value = ref('2025-01-02')
const disabledDate = (val) => {
  return val.getFullYear() < 2025
}
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;
}
</style>
