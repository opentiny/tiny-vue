<template>
  <tiny-currency v-model="value" :fetch-currency="getCurrencyData" clearable></tiny-currency>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Currency as TinyCurrency } from '@opentiny/vue'

const value = ref('')

function getCurrencyData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          'symbol': '$',
          'currency_code': 'MZN'
        },
        {
          'symbol': null,
          'currency_code': 'CNY'
        },
        {
          'symbol': '*NULL*',
          'currency_code': 'CHE'
        },
        {
          'symbol': '$',
          'currency_code': 'USD'
        },
        {
          'symbol': null,
          'currency_code': 'VND'
        },
        {
          'symbol': null,
          'currency_code': 'VUV'
        },
        {
          'symbol': null,
          'currency_code': 'WST'
        },
        {
          'symbol': null,
          'currency_code': 'XAF'
        },
        {
          'symbol': null,
          'currency_code': 'IRU'
        },
        {
          'symbol': null,
          'currency_code': 'IRE'
        },
        {
          'symbol': null,
          'currency_code': 'BYN'
        },
        {
          'symbol': null,
          'currency_code': 'HKD'
        }
      ])
    }, 500)
  })
}
</script>
