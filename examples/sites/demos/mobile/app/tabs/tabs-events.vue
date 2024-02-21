<template>
  <div>
    <tiny-tabs v-model="activeName" @click="click">
      <tiny-tab-item :key="item.name" v-for="item in tabsData" :title="item.title" :name="item.name">
        {{ item.content }}
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script>
import { Tabs, TabItem, Toast } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    return {
      activeName: 'first',
      tabsData: [
        {
          title: '表单组件',
          name: 'first',
          content: '表单组件,具有与用户交互，并可完成数据采集功能的控件。 '
        },
        {
          title: '数据组件',
          name: 'second',
          content: ' 数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等。'
        },
        {
          title: '导航组件',
          name: 'third',
          content: ' 导航组件,帮助网站访问者浏览站点的组件。'
        },
        {
          title: '业务组件',
          name: 'fourth',
          content: '业务组件,与业务紧密相关实现某种业务功能的组件集。'
        },
        {
          title: '其他组件',
          name: 'fifth.',
          content: '其他组件，更多种类组件。'
        }
      ]
    }
  },
  methods: {
    click(tabItem, event) {
      event.stopPropagation()
      Toast.service({
        text: '点击的页签 name 是 ' + tabItem.name
      })
    }
  }
}
</script>
