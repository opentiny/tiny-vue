<template>
  <tiny-tabs v-model="activeName" stretch tab-style="card">
    <tiny-tab-item title="表单组件，页签的宽度随整体容器宽度自动撑开" name="first">
      表单组件,具有与用户交互，并可完成数据采集功能的控件。
    </tiny-tab-item>
    <tiny-tab-item title="数据组件，页签的宽度随整体容器宽度自动撑开" name="second">
      当页签容器足够大时，页签的宽度随整体容器宽度自动撑开
    </tiny-tab-item>
    <tiny-tab-item title="导航组件" name="third"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
    <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
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
