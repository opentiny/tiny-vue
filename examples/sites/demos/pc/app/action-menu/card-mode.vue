<template>
  <tiny-action-menu :options="options" mode="card"> </tiny-action-menu>
</template>

<script>
import { ActionMenu } from '@opentiny/vue'
import { iconWebPlus, iconSuccessful, iconCloseSquare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyActionMenu: ActionMenu
  },
  data() {
    return {
      options: [
        {
          label: '远程登陆',
          icon: iconWebPlus()
        },
        {
          label: '开机',
          icon: iconSuccessful()
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
      ]
    }
  }
}
</script>
