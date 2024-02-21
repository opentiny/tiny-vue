<template>
  <tiny-tabs :active-name="activeName" tab-style="card">
    <tiny-tab-item v-for="item in tabs3" :key="item.name" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue'

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
const activeName = ref('navigation1')
const tabs3 = ref(setTabs3())
</script>
