<template>
  <tiny-action-menu :options="options" popper-class="custom-action-menu"> </tiny-action-menu>
</template>

<script setup>
import { ref } from 'vue'
import { TinyActionMenu } from '@opentiny/vue'

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
    children: [
      { label: '更改安全组', children: [{ label: '断开' }] },
      { label: '切换 VPC', divided: true }
    ]
  }
])
</script>

<style>
.custom-action-menu {
  background-color: var(--tv-color-bg-3);
}
</style>
