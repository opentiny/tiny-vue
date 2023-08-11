<template>
  <tiny-currency v-model="value" :fetch-currency="getCurrencyData" :fields="fields"></tiny-currency>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Currency as TinyCurrency } from '@opentiny/vue'

const value = ref('')
const fields = ref({
  textField: 'name',
  valueField: 'name'
})
const data = ref([
  {
    name: 'HKD1'
  },
  {
    name: 'USD1'
  },
  {
    name: 'CNY1'
  }
])

function getCurrencyData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = data.value
      resolve(result)
    }, 500)
  })
}
</script>
