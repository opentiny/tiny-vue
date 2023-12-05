<template>
  <tiny-tabs v-model="activeName" v-if="showTab" tab-style="card" :with-close="true" @close="close">
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
      <tiny-tabs v-model="activeName1" v-if="item.name === 'f1'">
        <tiny-tab-item title="s1子标签页" name="s1">
          子tab1
          <tiny-tabs v-model="activeName2">
            <tiny-tab-item title="ss1孙标签页" name="ss1"> 孙tab1 </tiny-tab-item>
            <tiny-tab-item title="ss2孙标签页" name="ss2"> 孙tab2 </tiny-tab-item>
            <tiny-tab-item title="ss3孙标签页" name="ss3"> 孙tab3 </tiny-tab-item>
          </tiny-tabs>
        </tiny-tab-item>
        <tiny-tab-item title="s2子标签页" name="s2"> 子tab2 </tiny-tab-item>
        <tiny-tab-item title="s3子标签页" name="s3"> 子tab3 </tiny-tab-item>
      </tiny-tabs>
    </tiny-tab-item>
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
      activeName1: 's1',
      activeName: 'f1',
      activeName2: 'ss1',
      showTab: true,
      Tabs: [
        {
          title: '表单组件',
          name: 'f1',
          content: '表单组件,具有与用户交互，并可完成数据采集功能的控件。 '
        },
        {
          title: '数据组件',
          name: 'f2',
          content: ' 数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等。'
        },
        {
          title: '导航组件',
          name: 'f3',
          content: ' 导航组件,帮助网站访问者浏览站点的组件。 '
        }
      ]
    }
  },
  methods: {
    close(name) {
      this.Tabs = this.Tabs.filter((tab) => {
        return tab.name !== name
      })
    }
  }
}
</script>
