<template>
  <tiny-tabs style="width: 400px" show-more-tabs more-show-all panel-max-height="300px" panel-width="150px">
    <template #moreIcon>
      <tiny-icon-popup />
    </template>
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup lang="jsx">
import { reactive } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue'
import { iconPopup } from '@opentiny/vue-icon'

const Tabs = reactive([])
const TinyIconPopup = iconPopup()

// 创建tabs
for (let i = 1; i < 101; i++) {
  const title = `Tab ${i}`
  Tabs.push({
    title,
    name: i + '',
    content: `${title} content `
  })
}
</script>
