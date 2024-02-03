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

<script lang="jsx">
import { Tabbar, TabbarItem } from '@opentiny/vue'
import { iconDialog, iconEmailAdd, iconGroup, iconSetting } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabbar: Tabbar,
    TinyTabbarItem: TabbarItem
  },
  data() {
    return {
      activeName: 3,
      IconDialog: iconDialog(),
      IconEmailAdd: iconEmailAdd(),
      IconGroup: iconGroup(),
      IconSetting: iconSetting(),
      icon: {
        active: '/static/images/dog1.png',
        inactive: '/static/images/dog2.png'
      }
    }
  }
}
</script>
