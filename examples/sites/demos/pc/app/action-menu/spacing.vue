<template>
  <div>
    <tiny-action-menu :options="options" spacing="10px"> </tiny-action-menu>
    <br />
    <tiny-action-menu :options="options" :spacing="20"> </tiny-action-menu>
  </div>
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
  }
}
</script>
