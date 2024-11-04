<template>
  <div class="demo-currency-class">
    <tiny-currency v-model="value" placeholder="请选择" set-default></tiny-currency>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCurrency } from '@opentiny/vue'

const value = ref('CNY')
</script>

<style scoped>
.demo-currency-class {
  width: 280px;
}
</style>
