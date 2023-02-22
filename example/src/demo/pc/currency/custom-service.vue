<template>
  <tiny-currency v-model="value" :fetch-currency="getCurrencyData" clearable></tiny-currency>
</template>

<script>
import { Currency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    getCurrencyData() {
      let that = this

      return new Promise((resolve, reject) => {
        that.$service.network
          .get('servlet/idataProxy/params/ws/soaservices/CurrencyServlet')
          .then((response) => {
            resolve((response.data && response.data.currency) || [])
          })
          .catch(reject)
      })
    }
  }
}
</script>
