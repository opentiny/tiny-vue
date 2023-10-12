<template>
  <tiny-company v-model="value" :fetch-company="getCompanyData" :fields="fields"></tiny-company>
</template>

<script lang="jsx">
import { Company } from '@opentiny/vue'

export default {
  components: {
    TinyCompany: Company
  },
  data() {
    return {
      value: '',
      fields: {
        textField: 'name',
        valueField: 'id'
      },
      data: [
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
      ]
    }
  },
  methods: {
    getCompanyData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          let result = this.data
          resolve(result)
        }, 500)
      })
    }
  }
}
</script>
