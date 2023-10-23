<template>
  <tiny-action-menu :options="options"> </tiny-action-menu>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ActionMenu as TinyActionMenu } from '@opentiny/vue'

const options = ref([
  {
    label: '远程登陆'
  },
  {
    label: '开机'
  },
  {
    label: '关机'
  },
  {
    label: '重启'
  },
  {
    label: '网络设置',
    children: [{ label: '更改安全组' }, { label: '切换VPC', divided: true }]
  }
])
</script>
