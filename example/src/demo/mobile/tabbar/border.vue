<template>
  <tiny-tabbar v-model="activeName" :border="false" :fixed="false">
    <tiny-tabbar-item :icon="IconDialog" z-index="10"> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconEmailAdd"> 邮件 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconGroup"> 人员 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconSetting"> 设置 </tiny-tabbar-item>
  </tiny-tabbar>
</template>

<script>
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
      IconSetting: iconSetting()
    }
  }
}
</script>
