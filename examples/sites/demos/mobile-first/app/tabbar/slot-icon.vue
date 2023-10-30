<template>
  <tiny-tabbar v-model="activeName">
    <tiny-tabbar-item>
      自定义
      <template #icon="data">
        <img :src="data.active ? icon.active : icon.inactive" />
      </template>
    </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconMail"> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconMarkOn"> 导航 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconUser"> 我的 </tiny-tabbar-item>
  </tiny-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from '@opentiny/vue'
import { IconMail, IconMarkOn, IconUser } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabbar: Tabbar,
    TinyTabbarItem: TabbarItem
  },
  data() {
    return {
      activeName: 0,
      IconMail: IconMail(),
      IconMarkOn: IconMarkOn(),
      IconUser: IconUser(),
      icon: {
        active: 'https://his-beta.huawei.com/opentiny/webnova/static/img/tiny3bg.b5dd307.jpg',
        inactive: '/static/images/3.jpg'
      }
    }
  }
}
</script>
