<template>
  <tiny-tabs tab-style="card" :editable="false" :with-add="true" @add="handleadd" style="width: 500px" show-more-tabs>
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
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
        name: String(++this.tabIndex),
        content: '动态增加tabitem'
      })
    }
  }
}
</script>
