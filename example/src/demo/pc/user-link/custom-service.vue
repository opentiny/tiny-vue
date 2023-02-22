<template>
  <tiny-user-link v-model="user" value-field="userAccount" v-bind="service"></tiny-user-link>
</template>

<script>
import { UserLink } from '@opentiny/vue'

export default {
  components: {
    TinyUserLink: UserLink
  },
  data() {
    return {
      user: '441047913162396',
      employeeNumber: '',
      service: {
        fetchW3Accounts: this.fetchW3Accounts,
        fetchUser: this.fetchUser,
        getUserImageUrl() {
          return Promise.resolve('http://w3-beta.huawei.com/w3lab/rest/yellowpage/face/00278660/120')
        }
      }
    }
  },
  methods: {
    fetchW3Accounts(args) {
      return new Promise((resolve, reject) => {
        let userAccount = args.userAccount.split(',')
        this.$service.network
          .post('services/jalor/security/user/list/byaccounts', userAccount)
          .then((response) => {
            this.employeeNumber = response.data[0].employeeNumber
            resolve(response.data)
          })
          .catch(reject)
      })
    },
    fetchUser() {
      return new Promise((resolve, reject) => {
        this.$service.network
          .get('servlet/idataProxy/params/ws/soaservices/PersonServlet', {
            params: {
              lang: 'ENG',
              empNo: this.employeeNumber
            }
          })
          .then((response) => {
            resolve(response.data)
          })
          .catch(reject)
      })
    }
  }
}
</script>
