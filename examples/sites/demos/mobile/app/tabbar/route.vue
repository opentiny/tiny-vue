<template>
  <tiny-tabbar v-model="activeName" :fixed="false" route>
    <tiny-tabbar-item :icon="IconDialog"> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconEmailAdd" url="#/mobile/zh-CN/component/tabbar"> 邮件 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconGroup" :to="{ path: '/mobile/zh-CN/component/tabbar' }" replace>
      人员
    </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconSetting"> 设置 </tiny-tabbar-item>
  </tiny-tabbar>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTabbar, TinyTabbarItem } from '@opentiny/vue-mobile'
import { iconDialog, iconEmailAdd, iconGroup, iconSetting } from '@opentiny/vue-icon'

const activeName = ref(3)
const IconDialog = iconDialog()
const IconEmailAdd = iconEmailAdd()
const IconGroup = iconGroup()
const IconSetting = iconSetting()
</script>
