<template>
  <tiny-tabbar v-model="activeName">
    <tiny-tabbar-item :icon="IconWebPlus"> 工作台 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconNode" custom-icon></tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconUser"> 我的 </tiny-tabbar-item>
  </tiny-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from '@opentiny/vue'
import { IconWebPlus, IconNode, IconUser } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabbar: Tabbar,
    TinyTabbarItem: TabbarItem
  },
  data() {
    return {
      activeName: 0,
      IconWebPlus: IconWebPlus(),
      IconNode: IconNode(),
      IconUser: IconUser()
    }
  }
}
</script>
