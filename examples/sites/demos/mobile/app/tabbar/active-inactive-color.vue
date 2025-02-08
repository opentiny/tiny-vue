<template>
  <div class="tiny-mobile-tabbar-demo">
    <tiny-tabbar v-model="activeName" :fixed="true" active-color="blue" inactive-color="grey">
      <tiny-tabbar-item :icon="IconDialog"> 消息 </tiny-tabbar-item>
      <tiny-tabbar-item :icon="IconEmailAdd"> 邮件 </tiny-tabbar-item>
      <tiny-tabbar-item :icon="IconGroup"> 人员 </tiny-tabbar-item>
      <tiny-tabbar-item :icon="IconSetting"> 设置 </tiny-tabbar-item>
    </tiny-tabbar>
  </div>
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
