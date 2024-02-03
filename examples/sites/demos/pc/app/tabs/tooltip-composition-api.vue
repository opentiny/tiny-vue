<template>
  <div class="tab-demo-position">
    <div class="mb10 tip">
      <tiny-switch v-model="value" @change="handleChange" class="mr10"></tiny-switch>当前tooltip-config是{{
        value ? 'tooltip配置' : '字符串title'
      }}。
    </div>
    <tiny-tabs v-model="activeName4" tab-style="card" position="left" :tooltip-config="tooltipConfig">
      <tiny-tab-item v-for="item in tabs3" :key="item.name" :title="item.title" :name="item.name">
        {{ item.content }}
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem, Switch as TinySwitch } from '@opentiny/vue'

const activeName4 = ref('navigation1')
const tooltipConfig = ref({ effect: 'light', placement: 'left', visible: 'auto' })
const value = true
const tabs3 = ref([
  {
    name: 'navigation1',
    title: 'Navigation 1(蒸羊羔蒸熊掌蒸鹿尾，可以试着将tooltip-config设置为字符串title)',
    content: 'Navigation 1'
  },
  {
    name: 'navigation2',
    title: 'Navigation 2',
    content: 'Navigation 2'
  },
  {
    name: 'navigation3',
    title: 'Navigation 3',
    content: 'Navigation 3'
  },
  {
    name: 'navigation4',
    title: 'Navigation 4',
    content: 'Navigation 4'
  },
  {
    name: 'navigation5',
    title: 'Navigation 5',
    content: 'Navigation 5'
  }
])

const handleChange = (value) => {
  value
    ? (tooltipConfig.value = { effect: 'light', placement: 'left', visible: 'auto' })
    : (tooltipConfig.value = 'title')
}
</script>

<style scoped>
.tab-demo-position {
  min-height: 250px;
}
.tip {
  display: flex;
  align-items: center;
}
</style>
