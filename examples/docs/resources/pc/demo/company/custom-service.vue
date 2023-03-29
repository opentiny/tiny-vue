<template>
  <tiny-company v-model="value" placeholder="请输入" :fetch-company="getCompanyData" is-drop-inherit-width></tiny-company>
</template>

<script lang="jsx">
import { Company } from '@opentiny/vue'

export default {
  components: {
    TinyCompany: Company
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    getCompanyData() {
      let that = this
      return new Promise((resolve, reject) => {
        that.$service.network
          .get('servlet/idataProxy/params/ws/soaservices/CompanyServlet')
          .then((response) => {
            resolve((response.data && response.data.company) || [])
          })
          .catch(reject)
      })
    }
  }
}
</script>
