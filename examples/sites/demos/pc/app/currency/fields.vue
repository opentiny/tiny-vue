<template>
  <tiny-currency v-model="value" :fetch-currency="getCurrencyData" :fields="fields"></tiny-currency>
</template>

<script lang="jsx">
import { Currency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency
  },
  data() {
    return {
      value: '',
      fields: {
        textField: 'name',
        valueField: 'name'
      },
      data: [
        {
          name: 'HKD1'
        },
        {
          name: 'USD1'
        },
        {
          name: 'CNY1'
        }
      ]
    }
  },
  methods: {
    getCurrencyData() {
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
