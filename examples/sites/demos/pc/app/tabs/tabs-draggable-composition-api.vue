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
    <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { TinyTabs, TinyTabItem } from '@opentiny/vue'
import Sortable from 'sortablejs'

const tabName = ref('2')
const dropConfig = ref({
  plugin: Sortable
})
const tabs = ref([
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
])

function handleStart(event) {
  console.log(event)
}

function handleOver(event) {
  console.log(event)
}

function handleEnd(event) {
  const { oldDraggableIndex, newDraggableIndex } = event
  const tab = tabs.value.splice(oldDraggableIndex, 1)[0]
  tabs.value.splice(newDraggableIndex, 0, tab)

  console.log(tabs.value)
}

function handleAdd() {
  tabs.value.push({
    title: 'Tab ' + String(tabs.value.length + 1),
    name: String(tabs.value.length + 1),
    content: '动态增加 tabitem'
  })
}
</script>
