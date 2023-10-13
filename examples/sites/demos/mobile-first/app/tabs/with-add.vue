<template>
  <tiny-tabs tab-style="card" :editable="false" :with-add="true" @add="handleadd" style="width: 500px" show-more-tabs>
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { Tabs, TabItem, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    return {
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
      tabIndex: 2,
      maxCount: 10
    }
  },
  methods: {
    handleadd() {
      // 如果tabItem数量小于指定值就可以新增
      if (this.Tabs.length < this.maxCount) {
        const name = `${++this.tabIndex}`
        const title = `Tab ++ ${name}`
        this.Tabs.push({ title, name, content: '动态增加tabitem - ' + name })
      } else {
        Modal.message('tabitem数量已到最大值')
      }
    }
  }
}
</script>
