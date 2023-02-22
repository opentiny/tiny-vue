<template>
  <div>
    <tiny-tabs style="height: 150px" v-model="activeName1" tab-style="card" :with-close="true" :with-add="true" @add="add" @close="close">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
        {{ item.content }}
      </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName2" tab-style="card">
      <tiny-tab-item title="表单组件" name="first"> 表单组件,具有与用户交互，并可完成数据采集功能的控件。 </tiny-tab-item>
      <tiny-tab-item title="数据组件" name="second">
        数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等
      </tiny-tab-item>
      <tiny-tab-item title="导航组件" name="third"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
      <tiny-tab-item title="业务组件" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
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
      activeName2: 'first',
      activeName3: 'first',
      tabIndex: 999,
      Tabs: [
        {
          title: '表单组件',
          name: 'first',
          content: '表单组件,具有与用户交互，并可完成数据采集功能的控件。 '
        },
        {
          title: '数据组件',
          name: 'second',
          content: ' 数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等'
        },
        {
          title: '导航组件',
          name: 'third',
          content: ' 导航组件,帮助网站访问者浏览站点的组件.'
        },
        {
          title: '业务组件',
          name: 'fourth',
          content: '业务组件,与业务紧密相关实现某种业务功能的组件集'
        },
        {
          title: '其他组件',
          name: 'fifth.',
          content: '其他组件，更多种类组件'
        }
      ]
    }
  },
  methods: {
    add() {
      console.log('add')
      this.Tabs.push({
        title: 'Tab ++',
        name: String(++this.tabIndex),
        content: '动态增加tabitem'
      })
    },
    close(name) {
      let index = 0
      this.Tabs.map((tab, inx) => {
        if (tab.name === name) {
          index = inx
        }
      })
      this.Tabs.splice(index, 1)
    }
  }
}
</script>
