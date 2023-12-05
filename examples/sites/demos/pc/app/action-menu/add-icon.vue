<template>
  <tiny-action-menu :options="options" spacing="12px" :max-show-num="3"> </tiny-action-menu>
</template>

<script lang="jsx">
import { ActionMenu } from '@opentiny/vue'
import { IconWebPlus, IconSuccessful, IconCloseSquare } from '@opentiny/vue-icon';

export default {
  components: {
    TinyActionMenu: ActionMenu
  },
  data() {
    return {
      options: [
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
      ]
    }
  }
}
</script>
