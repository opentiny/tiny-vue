<template>
  <tiny-tabs tab-style="card" style="width: 500px" :position="position" header-only>
    <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
import { TinyTabs, TinyTabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return {
      position: 'left',
      tabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content '
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 2
    }
  }
}
</script>
