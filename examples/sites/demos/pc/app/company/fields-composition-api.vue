<template>
  <tiny-company v-model="value" :fetch-company="getCompanyData" :fields="fields"></tiny-company>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Company as TinyCompany } from '@opentiny/vue'

const value = ref('')
const fields = ref({
  textField: 'name',
  valueField: 'id'
})
const data = ref([
  {
    id: '0001',
    name: '公司一'
  },
  {
    id: '0002',
    name: '公司二'
  },
  {
    id: '0003',
    name: '公司三'
  },
  {
    id: '0004',
    name: '公司四'
  }
])

function getCompanyData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = data.value
      resolve(result)
    }, 500)
  })
}
</script>
