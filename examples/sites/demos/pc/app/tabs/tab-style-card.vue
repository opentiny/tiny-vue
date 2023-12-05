<template>
  <tiny-tabs :active-name="activeName" tab-style="card" size="small">
    <tiny-tab-item v-for="item in tabs3" :key="item.name" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
import { Tabs, TabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    const setTabs3 = () => {
      const arr = []
      for (let i = 1; i <= 5; i++) {
        const text = `Navigation ${i}`
        arr.push({
          name: `navigation${i}`,
          title: text,
          content: text
        })
      }
      return arr
    }
    return {
      activeName: 'navigation1',
      tabs3: setTabs3()
    }
  }
}
</script>
