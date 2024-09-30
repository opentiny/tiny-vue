<template>
  <tiny-action-menu :options="options">
    <template #item="{ data }">
      <tiny-icon-smile></tiny-icon-smile>
      <span style="vertical-align: middle"> {{ data.name }}</span>
    </template>
  </tiny-action-menu>
</template>

<script setup>
import { ref } from 'vue'
import { ActionMenu as TinyActionMenu } from '@opentiny/vue'
import { iconSmile } from '@opentiny/vue-icon'

const options = ref([
  {
    name: '远程登陆'
  },
  {
    name: '开机'
  },
  {
    name: '关机'
  },
  {
    name: '重启'
  },
  {
    name: '网络设置',
    children: [{ name: '更改安全组' }, { name: '切换VPC', divided: true }]
  }
])

const TinyIconSmile = iconSmile()
</script>
