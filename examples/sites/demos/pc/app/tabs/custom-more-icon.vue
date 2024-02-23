<template>
  <tiny-tabs style="width: 400px" show-more-tabs popper-class="custom-class">
    <template #moreIcon>
      <icon-popup />
    </template>
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
import { Tabs, TabItem } from '@opentiny/vue'
import { iconPopup } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    IconPopup: iconPopup()
  },
  data() {
    return {
      Tabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content '
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        },
        {
          title: 'Tab 3',
          name: '3',
          content: 'Tab 3 content'
        },
        {
          title: 'Tab 4',
          name: '4',
          content: 'Tab 4 content'
        },
        {
          title: 'Tab 5',
          name: '5',
          content: 'Tab 5 content'
        },
        {
          title: 'Tab 6',
          name: '6',
          content: 'Tab 6 content'
        },
        {
          title: 'Tab 7',
          name: '7',
          content: 'Tab 7 content'
        },
        {
          title: 'Tab 8',
          name: '8',
          content: 'Tab 8 content'
        }
      ]
    }
  }
}
</script>
