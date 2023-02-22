<template>
  <tiny-logon-user v-bind="serivce"></tiny-logon-user>
</template>

<script>
import { LogonUser } from '@opentiny/vue'

export default {
  components: {
    TinyLogonUser: LogonUser
  },
  data() {
    return {
      serivce: {
        getUserInfo() {
          return Promise.resolve({
            userCN: 'test1',
            email: 'test1@test1.com'
          })
        }
      }
    }
  }
}
</script>
