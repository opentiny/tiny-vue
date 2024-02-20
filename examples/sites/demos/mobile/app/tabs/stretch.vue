<template>
  <tiny-tabs v-model="activeName" stretch>
    <tiny-tab-item title="导航组件" name="first"> 导航组件,帮助网站访问者浏览站点的组件。 </tiny-tab-item>
    <tiny-tab-item title="业务组件" name="second"> 业务组件,与业务紧密相关实现某种业务功能的组件集。 </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { Tabs, TabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>
