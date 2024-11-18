<template>
  <tiny-tabbar v-model="activeName" @change="handleChange">
    <tiny-tabbar-item :icon="IconWebPlus"> 工作台 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconMail"> 消息 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconMarkOn"> 导航 </tiny-tabbar-item>
    <tiny-tabbar-item :icon="IconUser"> 我的 </tiny-tabbar-item>
  </tiny-tabbar>
</template>

<script>
import { TinyTabbar, TinyTabbarItem, TinyModal } from '@opentiny/vue'
import { IconWebPlus, IconMail, IconMarkOn, IconUser } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabbar,
    TinyTabbarItem
  },
  data() {
    return {
      activeName: 0,
      IconWebPlus: IconWebPlus(),
      IconMail: IconMail(),
      IconMarkOn: IconMarkOn(),
      IconUser: IconUser()
    }
  },
  methods: {
    handleChange(val) {
      TinyModal.message({ message: '当前标签页为：' + val, status: 'info' })
    }
  }
}
</script>
