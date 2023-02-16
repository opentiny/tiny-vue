<template>
  <div class="tiny-mobile-tabbar-demo">
    <tiny-tabbar v-model="activeName" :fixed="true" name="name">
      <tiny-tabbar-item :icon="IconDialog" badge="20"> 消息 </tiny-tabbar-item>
      <tiny-tabbar-item :icon="IconEmailAdd" dot> 邮件 </tiny-tabbar-item>
      <tiny-tabbar-item :icon="IconGroup" badge="5"> 人员 </tiny-tabbar-item>
      <tiny-tabbar-item :icon="IconSetting"> 设置 </tiny-tabbar-item>
    </tiny-tabbar>
  </div>
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
