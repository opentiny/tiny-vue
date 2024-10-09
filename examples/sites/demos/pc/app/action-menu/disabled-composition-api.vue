<template>
  <div>
    <tiny-action-menu :options="options"> </tiny-action-menu>
    <br />
    <tiny-action-menu :options="options1"> </tiny-action-menu>
    <br />
    <tiny-action-menu :options="options1" mode="card"> </tiny-action-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ActionMenu as TinyActionMenu } from '@opentiny/vue'
import { iconWebPlus, iconSuccessful, iconCloseSquare } from '@opentiny/vue-icon'

const options = ref([
  {
    label: '远程登陆'
  },
  {
    label: '开机',
    disabled: true
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
      { label: '更改安全组', disabled: true },
      { label: '切换VPC', divided: true }
    ]
  }
])

const options1 = ref([
  {
    label: '远程登陆',
    icon: iconWebPlus()
  },
  {
    label: '开机',
    icon: iconSuccessful(),
    disabled: true
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
