<template>
  <tiny-action-menu :options="options" mode="card"> </tiny-action-menu>
</template>

<script setup>
import { ref } from 'vue'
import { ActionMenu as TinyActionMenu } from '@opentiny/vue'
import { iconWebPlus, iconSuccessful, iconCloseSquare } from '@opentiny/vue-icon'

const options = ref([
  {
    label: '远程登陆',
    icon: iconWebPlus()
  },
  {
    label: '开机',
    icon: iconSuccessful()
  },
  {
    label: '关机',
    icon: iconCloseSquare()
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
