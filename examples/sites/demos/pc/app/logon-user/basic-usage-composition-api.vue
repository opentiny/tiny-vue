<template>
  <tiny-logon-user :get-user-info="getUserInfo"></tiny-logon-user>
</template>

<script setup lang="jsx">
import { LogonUser as TinyLogonUser } from '@opentiny/vue'

function getUserInfo() {
  return Promise.resolve({
    userCN: 'test1',
    email: 'test1@test1.com'
  })
}
</script>
