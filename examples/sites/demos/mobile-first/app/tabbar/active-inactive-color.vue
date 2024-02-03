<template>
  <tiny-tabbar v-model="activeName" active-color="red" inactive-color="grey">
    <tiny-tabbar-item name="消息" :icon="IconWebPlus"> 工作台 </tiny-tabbar-item>
    <tiny-tabbar-item name="邮件" :icon="IconMail"> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item name="人员" :icon="IconMarkOn"> 导航 </tiny-tabbar-item>
    <tiny-tabbar-item name="设置" :icon="IconUser"> 我的 </tiny-tabbar-item>
  </tiny-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from '@opentiny/vue'
import { IconWebPlus, IconMail, IconMarkOn, IconUser } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabbar: Tabbar,
    TinyTabbarItem: TabbarItem
  },
  data() {
    return {
      activeName: '人员',
      IconWebPlus: IconWebPlus(),
      IconMail: IconMail(),
      IconMarkOn: IconMarkOn(),
      IconUser: IconUser()
    }
  }
}
</script>
