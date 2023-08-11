<template>
  <tiny-amount
    v-model="value"
    placeholder="请输入金额"
    :fetch-currency="getCurrency"
    :fields="{ textField: 'currency_code', valueField: 'symbol' }"
  ></tiny-amount>
</template>

<script lang="jsx">
import { Amount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    getCurrency() {
      return Promise.resolve([
        { symbol: '$', currency_code: 'MZN' },
        { symbol: null, currency_code: 'CNY' }
      ])
    }
  }
}
</script>
