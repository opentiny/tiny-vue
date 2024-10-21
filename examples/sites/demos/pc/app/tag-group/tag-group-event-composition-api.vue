<template>
  <tiny-tag-group :data="data" @item-click="itemClick"></tiny-tag-group>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup, Modal } from '@opentiny/vue'

const data = ref([
  {
    name: '标签一'
  },
  {
    name: '标签二'
  }
])

function itemClick(item, i, e) {
  Modal.message(`当前点击的是第${i + 1}个标签`)
}
</script>
