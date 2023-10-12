<template>
  <tiny-tabs
    tab-style="card"
    :editable="false"
    :with-add="true"
    @add="handleadd"
    style="width: 500px"
    show-more-tabs
    popper-class="custom-class"
  >
    <tiny-tab-item :key="item.name" v-for="item in Tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue'

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
  }
])
const tabIndex = ref(2)

function handleadd() {
  Tabs.value.push({
    title: 'Tab ++',
    name: ++tabIndex.value + '',
    content: '动态增加tabitem'
  })
}
</script>
