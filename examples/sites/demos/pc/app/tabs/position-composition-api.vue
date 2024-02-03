<template>
  <div class="tab-demo-position">
    <tiny-radio-group v-model="position" class="mb10">
      <tiny-radio-button label="top">top 显示</tiny-radio-button>
      <tiny-radio-button label="bottom">bottom 显示</tiny-radio-button>
      <tiny-radio-button label="left">left 显示</tiny-radio-button>
      <tiny-radio-button label="right">right 显示</tiny-radio-button>
    </tiny-radio-group>
    <tiny-tabs v-model="activeName4" tab-style="card" :position="position">
      <tiny-tab-item v-for="item in tabs3" :key="item.name" :title="item.title" :name="item.name">
        {{ item.content }}
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import {
  Tabs as TinyTabs,
  TabItem as TinyTabItem,
  RadioGroup as TinyRadioGroup,
  RadioButton as TinyRadioButton
} from '@opentiny/vue'

const activeName4 = ref('navigation1')
const position = ref('left')
const tabs3 = ref([
  {
    name: 'navigation1',
    title: 'Navigation 1',
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
</script>

<style scoped>
.tab-demo-position {
  min-height: 250px;
}
</style>
