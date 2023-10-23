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
      IconSetting: iconSetting()
    }
  }
}
</script>
