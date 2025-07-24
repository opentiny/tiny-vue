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

<script>
import { TinyActionMenu, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinyActionMenu
  },
  data() {
    return {
      options: [
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
      ]
    }
  },
  methods: {
    itemClick(data) {
      console.log(data)
      TinyNotify({
        message: JSON.stringify(data.itemData),
        position: 'top-right',
        duration: 2000
      })
    },
    visibleChange(status) {
      TinyNotify({
        message: `触发 visible-change 事件，下拉状态为 ${status}`,
        position: 'top-right',
        duration: 2000
      })
    },
    moreClick() {
      TinyNotify({
        message: '触发 moreClick 事件',
        position: 'top-right',
        duration: 2000
      })
    }
  }
}
</script>
