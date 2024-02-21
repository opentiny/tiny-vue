<template>
  <div class="demo-tabs">
    <div class="demo-tabs-item">
      <p>1. 动态增加页签</p>
      <tiny-tabs v-model="activeName1" :with-add="true" @add="handleAdd">
        <tiny-tab-item :key="item.name" v-for="item in tabsData" :title="item.title" :name="item.name">
          {{ item.content }}
        </tiny-tab-item>
      </tiny-tabs>
    </div>

    <div class="demo-tabs-item">
      <p>2. 动态删除页签</p>
      <tiny-tabs v-model="activeName2" :with-close="true" @close="handleClose">
        <tiny-tab-item :key="item.name" v-for="item in tabsData" :title="item.title" :name="item.name">
          {{ item.content }}
        </tiny-tab-item>
      </tiny-tabs>
    </div>
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
      tabsData: [
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
      activeName1: '1',
      activeName2: '2',
      tabIndex: 5
    }
  },
  methods: {
    handleAdd() {
      this.tabsData.push({
        title: `标签 ${this.tabIndex}`,
        name: String(this.tabIndex),
        content: '动态增加页签'
      })
      this.tabIndex++
    },
    handleClose(name) {
      let index = 0
      this.tabsData.map((tab, inx) => {
        if (tab.name === name) {
          index = inx
        }
      })
      this.tabsData.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.demo-tabs {
  height: 100%;
  background: #f5f5f5;
}
.demo-tabs-item {
  padding: 20px;
  margin-bottom: 48px;
  background: #fff;
}
</style>
