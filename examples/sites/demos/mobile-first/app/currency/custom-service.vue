<template>
  <div>
    <tiny-currency
      v-model="value"
      :visible="visible"
      @update:visible="visible = $event"
      mode="form"
      :fields="fields"
      :fetch-currency="getCurrencyData"
      :search-config="searchConfig"
    ></tiny-currency>
  </div>
</template>

<script>
import { Currency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency
  },
  data() {
    return {
      value: 'CNY1',
      visible: false,
      searchConfig: {
        options: [],
        searchMethod: this.searchMethod
      },
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
    },
    searchMethod({ input, options }) {
      console.log(input, options)
      return new Promise((resolve) => {
        resolve(options)
      })
    }
  }
}
</script>
