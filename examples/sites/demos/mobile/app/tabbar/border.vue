<template>
  <tiny-tabbar v-model="activeName" :border="false" :fixed="false">
    <tiny-tabbar-item :icon="IconDialog" z-index="10"> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconEmailAdd"> 邮件 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconGroup"> 人员 </tiny-tabbar-item>
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
