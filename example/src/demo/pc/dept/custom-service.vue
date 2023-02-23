<template>
  <tiny-dept v-model="value" :fetch-dept-by-value="getfetchDeptByValue" :fetch-dept="getfetchDept" :fetch-dept-list="getDeptList"></tiny-dept>
</template>

<script>
import { Dept } from '@opentiny/vue'

export default {
  components: {
    TinyDept: Dept
  },
  data() {
    return {
      value: '022471'
    }
  },
  methods: {
    getfetchDeptByValue(searchValue) {
      const that = this

      return new Promise((resolve, reject) => {
        let lang = that.$service.base.getEnvInfoSync().currentLanguage === 'zhCN' ? 'CHN' : 'ENG'

        that.$service.network
          .get('servlet/idataProxy/params/wsres/soaservices/dept/list', {
            params: {
              searchValue,
              lang,
              searchType: 3,
              _type: 'json',
              depttype: 'full'
            }
          })
          .then((response) => {
            resolve((response.data && response.data.result) || [])
          })
          .catch(reject)
      })
    },
    getfetchDept(code) {
      const that = this

      return new Promise((resolve, reject) => {
        let lang = that.$service.base.getEnvInfoSync().currentLanguage === 'zhCN' ? 'CHN' : 'ENG'

        that.$service.network
          .get('servlet/idataProxy/params/ws/soaservices/HRDepartmentServlet', {
            params: {
              code,
              lang
            }
          })
          .then((response) => {
            resolve(response.data && response.data.errorInfo ? {} : response.data)
          })
          .catch(reject)
      })
    },
    getDeptList(upperCode) {
      const that = this

      return new Promise((resolve, reject) => {
        const lang = that.$service.base.getEnvInfoSync().currentLanguage === 'zhCN' ? 'CHN' : 'ENG'
        let params = { lang, upperCode }

        if (upperCode !== null && typeof upperCode === 'object') {
          upperCode.lang = lang
          params = upperCode
        }

        that.$service.network
          .get('servlet/idataProxy/params/ws/soaservices/HRDeptListServlet', {
            params
          })
          .then((response) => {
            resolve((response.data && response.data.list) || [])
          })
          .catch(reject)
      })
    }
  }
}
</script>
