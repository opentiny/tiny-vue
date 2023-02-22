<template>
  <tiny-user v-model="user" v-bind="service" sort-by-fetch-data></tiny-user>
</template>

<script>
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: '441047913162396',
      service: {
        fetchSuggestUser: this.getSuggestUser,
        fetchW3Accounts: this.getSingleUser
      }
    }
  },
  methods: {
    getSuggestUser(userCN) {
      return new Promise((resolve) => {
        this.$service.network
          .get('services/jalor/security/user/suggest', {
            params: {
              userCN,
              scope: '',
              lang: 'CHN'
            },
            hideErr: true
          })
          .then((response) => {
            resolve(response.data || [])
          })
          .catch(() => {})
      })
    },
    getSingleUser(userId) {
      return new Promise((resolve) => {
        this.$service.network
          .get('services/jalor/security/user/single', {
            params: {
              userId
            },
            hideErr: true
          })
          .then((response) => {
            resolve(response.data)
          })
          .catch(() => {})
      })
    }
  }
}
</script>
