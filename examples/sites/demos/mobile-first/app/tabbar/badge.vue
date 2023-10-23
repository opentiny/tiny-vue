<template>
  <tiny-tabbar v-model="activeName">
    <tiny-tabbar-item :icon="IconWebPlus" :badge="20"> 工作台 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconMail" dot> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconMarkOn" :badge="5"> 导航 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconUser"> 我的 </tiny-tabbar-item>
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
      activeName: 0,
      IconWebPlus: IconWebPlus(),
      IconMail: IconMail(),
      IconMarkOn: IconMarkOn(),
      IconUser: IconUser()
    }
  }
}
</script>
