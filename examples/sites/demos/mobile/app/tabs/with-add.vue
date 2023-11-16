<template>
  <div>
    <div>
      <h2 style="font-size: 16px; margin: 12px 0 24px 8px">基本用法</h2>
      <div>
        <tiny-tabs v-model="activeName" :with-add="true" @add="handleadd" :swipeable="true">
          <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
            {{ item.content }}
          </tiny-tab-item>
        </tiny-tabs>
      </div>
    </div>
  </div>
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
      Tabs: [
        {
          title: '标签 1',
          name: '1',
          content: '内容 1'
        },
        {
          title: '标签 2',
          name: '2',
          content: '内容 2'
        },
        {
          title: '标签 3',
          name: '3',
          content: '内容 3'
        },
        {
          title: '标签 4',
          name: '4',
          content: '内容 4'
        }
      ],
      activeName: '1',
      tabIndex: 5
    }
  },
  methods: {
    handleadd() {
      this.Tabs.push({
        title: `标签 ${this.tabIndex}`,
        name: String(this.tabIndex),
        content: '动态增加tabitem'
      })
      this.tabIndex++
    }
  }
}
</script>
