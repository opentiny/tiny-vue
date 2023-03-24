<template>
  <tiny-country v-model="value" clearable placeholder="请选择" :fetch-country="getCountryData"></tiny-country>
</template>

<script lang="jsx">
import { Country } from '@opentiny/vue'

export default {
  components: {
    TinyCountry: Country
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    getCountryData() {
      let that = this
      return new Promise((resolve, reject) => {
        that.$service.network
          .get('servlet/idataProxy/params/ws/soaservices/CountryServlet')
          .then((response) => {
            resolve((response.data && response.data.country) || [])
          })
          .catch(reject)
      })
    }
  }
}
</script>
