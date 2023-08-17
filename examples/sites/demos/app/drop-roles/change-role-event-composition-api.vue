<template>
  <tiny-drop-roles v-model="value" ref="roleRef" @change="change"></tiny-drop-roles>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { DropRoles as TinyDropRoles } from '@opentiny/vue'
import Notify from '@opentiny/vue-notify'

const value = ref('')
const roleRef = ref(null)

function change(role) {
  // 下拉角色组件需要触发 change 事件去发送请求，role 为要切换的角色
  roleRef.value.$service?.common.getChangeRoleUrl(role).then((url) => {
    // window.location.href = url
    Notify({
      title: '切换后的角色是：' + role + '，根据角色发送请求的 URL 如下：',
      message: url,
      offset: 0
    })
  })
}
</script>
