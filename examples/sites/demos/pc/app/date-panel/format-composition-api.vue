<template>
  <div class="demo-date-panel-wrap">
    <div>{{ value }}</div>
    <tiny-date-panel v-model="value" format="yyyy-MM-dd"></tiny-date-panel>
    <div class="label">{{ value1 }}</div>
    <tiny-date-panel v-model="value1" format="yyyy/MM/dd"></tiny-date-panel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel } from '@opentiny/vue'

const value = ref('')
const value1 = ref('')
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;
  .label {
    margin-top: 18px;
  }
}
</style>
