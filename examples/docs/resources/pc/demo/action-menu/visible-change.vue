<template>
  <tiny-action-menu :options="options" @visible-change="visibleChange"> </tiny-action-menu>
</template>

<script>
import { ActionMenu, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyActionMenu: ActionMenu
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
          children: [{ label: '更改安全组' }, { label: '切换VPC', divided: true }]
        }
      ]
    }
  },
  methods: {
    visibleChange(status) {
      Notify({
        message: `触发 visible-change 事件,下拉状态为 ${status}`,
        position: 'top-right',
        duration: 2000
      })
    }
  }
}
</script>
