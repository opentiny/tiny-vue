<template>
  <tiny-tabs v-model="activeName4" tab-style="border-card" size="small">
    <tiny-tab-item v-for="item in tabs3" :key="item.name" :title="item.title" :name="item.name">
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
      activeName4: 'navigation1',
      tabs3: [
        {
          name: 'navigation1',
          title: 'Navigation 1',
          content: 'Navigation 1'
        },
        {
          name: 'navigation2',
          title: 'Navigation 2',
          content: 'Navigation 2'
        },
        {
          name: 'navigation3',
          title: 'Navigation 3',
          content: 'Navigation 3'
        },
        {
          name: 'navigation4',
          title: 'Navigation 4',
          content: 'Navigation 4'
        },
        {
          name: 'navigation5',
          title: 'Navigation 5',
          content: 'Navigation 5'
        }
      ]
    }
  }
}
</script>
