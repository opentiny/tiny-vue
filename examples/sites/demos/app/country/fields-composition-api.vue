<template>
  <tiny-country v-model="value" :fetch-country="getCountryData" :fields="fields" :disabled="false"></tiny-country>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Country as TinyCountry } from '@opentiny/vue'

const value = ref('')
const fields = ref({
  textField: 'name',
  valueField: 'id'
})
const data = ref([
  {
    id: '0001',
    name: '中国'
  },
  {
    id: '0002',
    name: '火星'
  },
  {
    id: '0003',
    name: '芬兰'
  },
  {
    id: '0004',
    name: '法国'
  }
])

function getCountryData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = data.value
      resolve(result)
    }, 500)
  })
}
</script>
