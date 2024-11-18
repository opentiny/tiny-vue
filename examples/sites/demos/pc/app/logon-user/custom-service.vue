<template>
  <tiny-logon-user v-bind="serivce"></tiny-logon-user>
</template>

<script lang="jsx">
import { TinyLogonUser } from '@opentiny/vue'

export default {
  components: {
    TinyLogonUser
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
