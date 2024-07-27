<template>
  <tiny-tabs style="width: 400px" show-more-tabs popper-class="custom-class">
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
for (let i = 1; i < 9; i++) {
  const title = `Tab ${i}`
  Tabs.push({
    title,
    name: i + '',
    content: `${title} content `
  })
}
</script>
