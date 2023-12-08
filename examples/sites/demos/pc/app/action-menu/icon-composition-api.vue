<template>
  <div>
    <p>场景1：只显示图标</p>
    <tiny-action-menu
      class="custom-icon"
      :options="options"
      :suffix-icon="tinyIconEllipsis"
      more-text=""
      spacing="12px"
      :max-show-num="3"
    >
    </tiny-action-menu>
    <p>场景2：只显示文本</p>
    <tiny-action-menu :options="options1" :show-icon="false" :max-show-num="3"> </tiny-action-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ActionMenu as TinyActionMenu } from '@opentiny/vue'
import { iconWebPlus, iconSuccessful, iconCloseSquare, iconEllipsis } from '@opentiny/vue-icon'

const options = ref([
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
])

const options1 = ref([
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

const tinyIconEllipsis = iconEllipsis()
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
  margin-top: 30px;
}
</style>
