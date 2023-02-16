<template>
  <tiny-tabbar v-model="activeName" :fixed="false" route>
    <tiny-tabbar-item :icon="IconDialog"> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item
      :icon="IconEmailAdd"
      url="#/mobile/zh-CN/component/tabbar"
    >
      邮件
    </tiny-tabbar-item>
    <tiny-tabbar-item
      :icon="IconGroup"
      :to="{ path: '/mobile/zh-CN/component/tabbar' }"
      replace
    >
      人员
    </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconSetting"> 设置 </tiny-tabbar-item>
  </tiny-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from '@opentiny/vue'
import {
  iconDialog,
  iconEmailAdd,
  iconGroup,
  iconSetting
} from '@opentiny/vue-icon'

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
