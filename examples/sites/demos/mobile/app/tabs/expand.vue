<template>
  <div class="demo-tabs">
    <tiny-tabs v-model="activeName" show-expand-tabs expand-tabs-title="请选择" expand-tabs-mode="columns">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
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
        },
        {
          title: '标签 5',
          name: '5',
          content: '内容 5'
        },
        {
          title: '标签 6',
          name: '6',
          content: '内容 6'
        },
        {
          title: '标签 7',
          name: '7',
          content: '内容 7'
        },
        {
          title: '标签 8',
          name: '8',
          content: '内容 8'
        },
        {
          title: '标签 9',
          name: '9',
          content: '内容 9'
        }
      ],
      activeName: '1'
    }
  }
}
</script>

<style scoped>
.demo-tabs {
  height: 100%;
  background: #f5f5f5;
  text-align: center;
}
</style>
