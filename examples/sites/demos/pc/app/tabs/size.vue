<template>
  <div>
    <tiny-tabs v-model="activeName" size="small">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName" separator size="small">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName" tab-style="button-card" size="small">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
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
      activeName: '1',
      Tabs: []
    }
  },
  created() {
    // 创建tabs
    for (let i = 1; i < 5; i++) {
      const title = `Tab ${i}`
      this.Tabs.push({
        title,
        name: i + '',
        content: `${title} content `
      })
    }
  }
}
</script>
