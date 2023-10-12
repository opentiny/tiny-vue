<template>
  <tiny-action-menu :options="options" @visible-change="visibleChange"> </tiny-action-menu>
</template>

<script setup>
import { ref } from 'vue'
import { ActionMenu as TinyActionMenu, Notify } from '@opentiny/vue'

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

function visibleChange(status) {
  Notify({
    message: `触发 visible-change 事件,下拉状态为 ${status}`,
    position: 'top-right',
    duration: 2000
  })
}
</script>
