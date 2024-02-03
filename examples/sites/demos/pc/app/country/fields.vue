<template>
  <tiny-country v-model="value" :fetch-country="getCountryData" :fields="fields" :disabled="false"></tiny-country>
</template>

<script lang="jsx">
import { Country } from '@opentiny/vue'

export default {
  components: {
    TinyCountry: Country
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
      ]
    }
  },
  methods: {
    getCountryData() {
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
