<template>
  <tiny-logon-user v-bind="serivce"></tiny-logon-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { LogonUser as TinyLogonUser } from '@opentiny/vue'

const serivce = ref({
  getUserInfo() {
    return Promise.resolve({
      userCN: 'test1',
      email: 'test1@test1.com'
    })
  }
})
</script>
