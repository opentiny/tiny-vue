<template>
  <div class="demo-currency-class">
    <tiny-currency v-model="value" :fetch-currency="getCurrencyData" :fields="fields"></tiny-currency>
  </div>
</template>

<script lang="jsx">
import { TinyCurrency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency
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

<style scoped>
.demo-currency-class {
  width: 280px;
}
</style>
