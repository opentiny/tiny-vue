<template>
  <tiny-action-menu :options="options" trigger="click" @more-click="moreClick"> </tiny-action-menu>
</template>

<script setup lang="jsx">
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

function moreClick() {
  Notify({
    message: '触发 moreClick 事件',
    position: 'top-right',
    duration: 2000
  })
}
</script>
