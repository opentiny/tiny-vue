<template>
  <div>
    <tiny-currency v-model="value" placeholder="请选择" @change="change"></tiny-currency>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Currency as TinyCurrency, Modal } from '@opentiny/vue'

const value = ref('VUV')

function change(value) {
  Modal.message({ message: `当前值为 ${value}`, status: 'info' })
}
</script>

<style scoped>
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
