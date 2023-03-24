<template>
  <tiny-action-menu :options="options" @more-click="moreClick"> </tiny-action-menu>
</template>

<script lang="jsx">
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
    moreClick() {
      Notify({
        message: '触发 moreClick 事件',
        position: 'top-right',
        duration: 2000
      })
    }
  }
}
</script>
