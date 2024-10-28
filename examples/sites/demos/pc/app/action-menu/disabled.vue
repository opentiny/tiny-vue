<template>
  <div>
    <tiny-action-menu :options="options"> </tiny-action-menu>
    <br />
    <tiny-action-menu :options="options1"> </tiny-action-menu>
    <br />
    <tiny-action-menu :options="options1" mode="card"> </tiny-action-menu>
  </div>
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
      ],
      options1: [
        {
          label: '远程登陆',
          icon: iconWebPlus()
        },
        {
          label: '开机',
          icon: iconSuccessful(),
          disabled: true
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
