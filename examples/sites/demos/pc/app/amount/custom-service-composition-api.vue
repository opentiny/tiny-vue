<template>
  <tiny-amount
    v-model="value"
    placeholder="请输入金额"
    :fetch-currency="getCurrency"
    :fields="{ textField: 'currency_code', valueField: 'symbol' }"
  ></tiny-amount>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Amount as TinyAmount } from '@opentiny/vue'

const value = ref('')

function getCurrency() {
  return Promise.resolve([
    { symbol: '$', currency_code: 'MZN' },
    { symbol: null, currency_code: 'CNY' }
  ])
}
</script>
