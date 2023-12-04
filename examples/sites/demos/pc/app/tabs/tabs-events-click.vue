<template>
  <tiny-tabs v-model="activeName" @click="click" tab-style="card">
    <tiny-tab-item title="表单组件" name="first"> 表单组件,具有与用户交互，并可完成数据采集功能的控件。 </tiny-tab-item>
    <tiny-tab-item title="数据组件" name="second">
      数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等。
    </tiny-tab-item>
    <tiny-tab-item title="导航组件" name="third"> 导航组件,帮助网站访问者浏览站点的组件。 </tiny-tab-item>
    <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集。 </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
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
  },
  methods: {
    click(tabs) {
      this.$message({
        title: tabs.name,
        message: '点击了 ' + tabs.title + ' 页签'
      })
    }
  }
}
</script>
