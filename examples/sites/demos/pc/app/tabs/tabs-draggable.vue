<template>
  <tiny-tabs
    v-model="tabName"
    tab-style="card"
    :drop-config="dropConfig"
    :with-add="true"
    @add="handleAdd"
    style="width: 500px"
    @tab-drag-start="handleStart"
    @tab-drag-over="handleOver"
    @tab-drag-end="handleEnd"
  >
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { TinyTabs, TinyTabItem } from '@opentiny/vue'
import Sortable from 'sortablejs'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return {
      tabName: '2',
      dropConfig: {
        plugin: Sortable
      },
      TinyTabs: [
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
        }
      ]
    }
  },
  methods: {
    handleStart(event) {
      console.log(event)
    },
    handleOver(event) {
      console.log(event)
    },
    handleEnd(event) {
      const { oldDraggableIndex, newDraggableIndex } = event
      const tab = this.TinyTabs.splice(oldDraggableIndex, 1)[0]
      this.TinyTabs.splice(newDraggableIndex, 0, tab)

      console.log(this.TinyTabs)
    },
    handleAdd() {
      this.TinyTabs.push({
        title: 'Tab ' + String(this.TinyTabs.length + 1),
        name: String(this.TinyTabs.length + 1),
        content: '动态增加tabitem'
      })
    }
  }
}
</script>
