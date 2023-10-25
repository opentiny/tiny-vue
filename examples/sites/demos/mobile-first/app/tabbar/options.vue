<template>
  <tiny-tabbar v-model="activeName" :item-list="itemList" :show-number="3"></tiny-tabbar>
</template>

<script>
import { Tabbar } from '@opentiny/vue'
import { IconWebPlus, IconMail, IconMarkOn, IconUser, IconEllipsis } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabbar: Tabbar
  },
  data() {
    return {
      activeName: 1,
      IconWebPlus: IconWebPlus(),
      IconMail: IconMail(),
      IconMarkOn: IconMarkOn(),
      IconUser: IconUser(),
      IconEllipsis: IconEllipsis(),
      itemList: [
        { text: '工作台', icon: IconWebPlus(), badge: 30 },
        { text: '消息', icon: IconMail(), dot: true },
        { text: '导航', icon: IconMarkOn() },
        { text: '我的', icon: IconUser() },
        { text: '更多', icon: IconEllipsis() }
      ]
    }
  }
}
</script>
