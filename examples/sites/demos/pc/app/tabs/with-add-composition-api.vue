<template>
  <tiny-tabs
    tab-style="card"
    :with-add="true"
    @add="handleAdd"
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
import { Tabs as TinyTabs, TabItem as TinyTabItem, Modal } from '@opentiny/vue'

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

function handleAdd() {
  Modal.message({
    message: '动态增加 Tab ++',
    status: 'success'
  })

  Tabs.value.push({
    title: 'Tab ++',
    name: ++tabIndex.value + '',
    content: '动态增加tabitem'
  })
}
</script>
