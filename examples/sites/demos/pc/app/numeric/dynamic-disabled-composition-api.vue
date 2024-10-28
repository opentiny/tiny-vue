<template>
  <div class="f-r f-box-center">
    <span>全部禁用：</span>
    <tiny-numeric v-model="value1" :disabled="disabled" class="mr20"></tiny-numeric>
    <tiny-numeric v-model="value1" :disabled="disabled" unit="kg" class="mr20"></tiny-numeric>
    <tiny-numeric v-model="value1" :disabled="disabled" :controls="false" show-left class="mr20"></tiny-numeric>
    <tiny-numeric v-model="value1" :disabled="disabled" controls-position="right" class="mr20"></tiny-numeric>
    <span>部分禁用：</span>
    <tiny-numeric v-model="value2" :min="min" :max="max"></tiny-numeric>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value1 = ref(1)
const value2 = ref(0)
const disabled = ref(true)
const min = ref(0)
const max = ref(10)
</script>

<style scoped>
.mr20 {
  margin-right: 20px;
}
</style>
