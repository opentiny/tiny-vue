<template>
  <div>
    <tiny-tabs v-model="activeName" size="small">
      <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName" separator size="small">
      <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName" tab-style="button-card" size="small">
      <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name"> </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import { TinyTabs, TinyTabItem } from '@opentiny/vue'

const activeName = ref('1')
const tabs = reactive([])

// 创建 tabs
for (let i = 1; i < 5; i++) {
  const title = `Tab ${i}`
  tabs.push({
    title,
    name: i + '',
    content: `${title} content `
  })
}
</script>
