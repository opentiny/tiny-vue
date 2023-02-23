<template>
  <tiny-action-menu :options="options" popperClass="custom-action-menu"> </tiny-action-menu>
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
          children: [
            { label: '更改安全组', children: [{ label: '断开' }] },
            { label: '切换VPC', divided: true }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
.custom-action-menu {
  background-color: antiquewhite;
}
</style>
