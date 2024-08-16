<template>
  <div>
    <tiny-tabs v-model="activeName" size="small">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName" separator size="small">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName" tab-style="button-card" size="small">
      <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue'

const activeName = ref('1')
const Tabs = reactive([])

// 创建tabs
for (let i = 1; i < 5; i++) {
  const title = `Tab ${i}`
  Tabs.push({
    title,
    name: i + '',
    content: `${title} content `
  })
}
</script>
