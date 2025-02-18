<template>
  <tiny-action-menu
    :options="options"
    trigger="click"
    @item-click="itemClick"
    @more-click="moreClick"
    @visible-change="visibleChange"
  >
  </tiny-action-menu>
</template>

<script setup>
import { ref } from 'vue'
import { TinyActionMenu, TinyNotify } from '@opentiny/vue'

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
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  }
])

const itemClick = (data) => {
  TinyNotify({
    message: JSON.stringify(data.itemData),
    position: 'top-right',
    duration: 2000
  })
}

const visibleChange = (status) => {
  TinyNotify({
    message: `触发 visible-change 事件，下拉状态为 ${status}`,
    position: 'top-right',
    duration: 2000
  })
}
const moreClick = () => {
  TinyNotify({
    message: '触发 moreClick 事件',
    position: 'top-right',
    duration: 2000
  })
}
</script>
