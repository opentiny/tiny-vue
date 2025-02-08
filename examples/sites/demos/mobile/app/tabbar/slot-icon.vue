<template>
  <tiny-tabbar v-model="activeName" :fixed="false">
    <tiny-tabbar-item>
      自定义
      <template #icon="data">
        <img :src="data.active ? icon.active : icon.inactive" />
      </template>
    </tiny-tabbar-item>
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
const icon = ref({
  active: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog1.png`,
  inactive: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog2.png`
})
</script>
