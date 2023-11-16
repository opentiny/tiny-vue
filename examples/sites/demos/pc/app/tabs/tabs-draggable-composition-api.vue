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

<script setup>
import { ref } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue'
import Sortable from 'sortablejs'

const tabName = ref('2')
const dropConfig = ref({
  plugin: Sortable
})
const Tabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab content '
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
])

function handleStart(event) {
  console.log(event)
}

function handleOver(event) {
  console.log(event)
}

function handleEnd(event) {
  const { oldDraggableIndex, newDraggableIndex } = event
  const tab = Tabs.value.splice(oldDraggableIndex, 1)[0]
  Tabs.value.splice(newDraggableIndex, 0, tab)

  console.log(Tabs.value)
}

function handleAdd() {
  Tabs.value.push({
    title: 'Tab ' + String(Tabs.value.length + 1),
    name: String(Tabs.value.length + 1),
    content: '动态增加tabitem'
  })
}
</script>
