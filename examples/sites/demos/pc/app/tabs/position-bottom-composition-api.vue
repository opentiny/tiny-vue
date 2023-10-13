<template>
  <tiny-tabs v-model="activeName4" tab-style="card" position="bottom">
    <tiny-tab-item v-for="item in tabs3" :key="item.name" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue'

const activeName4 = ref('navigation1')
const tabs3 = ref([
  {
    name: 'navigation1',
    title: 'Navigation1',
    content: 'Navigation1'
  },
  {
    name: 'navigation2',
    title: 'Navigation2',
    content: 'Navigation2'
  },
  {
    name: 'navigation3',
    title: 'Navigation3',
    content: 'Navigation3'
  },
  {
    name: 'navigation4',
    title: 'Navigation4',
    content: 'Navigation4'
  },
  {
    name: 'navigation5',
    title: 'Navigation5',
    content: 'Navigation5'
  }
])
</script>
