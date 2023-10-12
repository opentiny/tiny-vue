<template>
  <div>
    <tiny-drop-roles size="medium" v-model="value" @change="change"></tiny-drop-roles>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script setup lang="jsx">
import { ref, getCurrentInstance } from 'vue'
import { DropRoles as TinyDropRoles, Notify } from '@opentiny/vue'

const value = ref('')
const instance = getCurrentInstance()
const { $service } = instance.appContext.config.globalProperties

function change(role) {
  // 下拉角色组件需要触发 change 事件去发送请求，role 为要切换的角色
  $service?.common.getChangeRoleUrl(role).then((url) => {
    Notify({
      title: '切换后的角色是：' + role + '，根据角色发送请求的 URL 如下：',
      message: url,
      offset: 0
    })
  })
}
</script>
