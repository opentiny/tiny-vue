<template>
  <tiny-action-menu :options="options" @item-click="itemClick"> </tiny-action-menu>
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

function itemClick(data) {
  Notify({
    message: JSON.stringify(data.itemData),
    position: 'top-right',
    duration: 2000
  })
}
</script>
