<template>
  <tiny-user-account v-bind="service" show-arrow></tiny-user-account>
</template>

<script lang="jsx">
import { UserAccount } from '@opentiny/vue'

export default {
  components: {
    TinyUserAccount: UserAccount
  },
  data() {
    return {
      service: {
        getUserInfo() {
          return Promise.resolve({
            userCN: 'test1',
            email: 'test1@test1.com'
          })
        },
        getUserImageUrl() {
          return Promise.resolve('http://w3-beta.huawei.com/w3lab/rest/yellowpage/face/00278660/120')
        }
      }
    }
  }
}
</script>
