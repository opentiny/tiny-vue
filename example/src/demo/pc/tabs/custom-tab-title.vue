<template>
  <tiny-tabs v-model="activeName">
    <tiny-tab-item name="first">
      <template #title>
        <div>
          <icon-calendar style="vertical-align: middle" class="tiny-svg-size"></icon-calendar>
          <span>表单组件</span>
        </div>
      </template>
      <div>表单组件,具有与用户交互，并可完成数据采集功能的控件。</div>
    </tiny-tab-item>
    <tiny-tab-item name="second">
      <template #title>
        <div>
          <icon-replies style="fill: red; vertical-align: middle" class="tiny-svg-size"></icon-replies>
          <span>数据组件</span>
        </div>
      </template>
      <div>数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等</div>
    </tiny-tab-item>
    <tiny-tab-item title="导航组件" name="third"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
    <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { Tabs, TabItem } from '@opentiny/vue'
import { IconCalendar, IconReplies } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    IconCalendar: IconCalendar(),
    IconReplies: IconReplies()
  },
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style scoped>
svg {
  margin-right: 6px;
}
</style>
