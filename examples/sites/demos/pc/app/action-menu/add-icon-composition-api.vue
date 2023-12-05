<template>
  <tiny-action-menu :options="options" :max-show-num="3"> </tiny-action-menu>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ActionMenu as TinyActionMenu } from '@opentiny/vue'
import { IconWebPlus, IconSuccessful, IconCloseSquare } from '@opentiny/vue-icon';

const options = ref([
  {
    label: '远程登陆',
    icon: IconWebPlus()
  },
  {
    label: '开机',
    icon: IconSuccessful()
  },
  {
    label: '关机',
    icon: IconCloseSquare()
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
