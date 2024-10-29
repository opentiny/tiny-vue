<template>
  <tiny-logon-user :get-user-info="getUserInfo"></tiny-logon-user>
</template>

<script lang="jsx">
import { TinyLogonUser } from '@opentiny/vue'

export default {
  components: {
    TinyLogonUser
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
