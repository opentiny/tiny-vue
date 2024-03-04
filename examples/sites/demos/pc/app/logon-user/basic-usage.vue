<template>
  <tiny-logon-user :get-user-info="getUserInfo"></tiny-logon-user>
</template>

<script lang="jsx">
import { LogonUser } from '@opentiny/vue'

export default {
  components: {
    TinyLogonUser: LogonUser
  },
  methods: {
    getUserInfo() {
      return Promise.resolve({
        userCN: 'test1',
        email: 'test1@test1.com'
      })
    }
  }
}
</script>
