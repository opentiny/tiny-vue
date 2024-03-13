<template>
  <tiny-action-menu :options="options"> </tiny-action-menu>
</template>

<script>
import { ActionMenu } from '@opentiny/vue'

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
          label: '开机',
          disabled: true
        },
        {
          label: '关机'
        },
        {
          label: '重启',
          disabled: true
        },
        {
          label: '网络设置',
          children: [
            { label: '更改安全组', disabled: true },
            { label: '切换VPC', divided: true }
          ]
        }
      ]
    }
  }
}
</script>
