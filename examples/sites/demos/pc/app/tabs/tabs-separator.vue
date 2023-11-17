<template>
  <div>
    <tiny-tabs v-model="activeName1" separator :with-close="true">
      <tiny-tab-item title="表单组件" name="first">
        表单组件,具有与用户交互，并可完成数据采集功能的控件。
      </tiny-tab-item>
      <tiny-tab-item title="数据组件" name="second">
        数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等
      </tiny-tab-item>
      <tiny-tab-item title="导航组件" name="third"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
      <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
    </tiny-tabs>
    <br /><br /><br /><br />
    <tiny-tabs v-model="activeName2" separator>
      <tiny-tab-item title="表单组件" name="first">
        表单组件,具有与用户交互，并可完成数据采集功能的控件。
      </tiny-tab-item>
      <tiny-tab-item title="数据组件" name="second">
        数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等
      </tiny-tab-item>
      <tiny-tab-item title="导航组件" name="third"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
      <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
    </tiny-tabs>
    <br /><br /><br /><br />
    <tiny-tabs separator :editable="false" :with-add="true" @add="handleadd" style="width: 500px" show-more-tabs>
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
        {{ item.content }}
      </tiny-tab-item>
    </tiny-tabs>
  </div>
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
      activeName1: 'first',
      activeName2: 'second',
      Tabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab content '
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 2
    }
  },
  methods: {
    handleadd() {
      this.Tabs.push({
        title: 'Tab ++',
        name: ++this.tabIndex + '',
        content: '动态增加tabitem'
      })
    }
  }
}
</script>
