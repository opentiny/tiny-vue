<template>
  <tiny-tag-group :data="data" @item-click="itemClick"></tiny-tag-group>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup, Modal } from '@opentiny/vue'

const data = ref([
  {
    name: '标签一',
    type: 'default'
  },
  {
    name: '标签二',
    type: 'default'
  },
  {
    name: '标签三',
    type: 'default'
  },
  {
    name: '标签四',
    type: 'default'
  },
  {
    name: '标签五',
    type: 'default'
  },
  {
    name: '标签六',
    type: 'default'
  },
  {
    name: '标签七',
    type: 'default'
  },
  {
    name: '标签八',
    type: 'default'
  },
  {
    name: '标签九',
    type: 'default'
  },
  {
    name: '标签十',
    type: 'default'
  },
  {
    name: '标签十一',
    type: 'default'
  },
  {
    name: '标签十二',
    type: 'default'
  },
  {
    name: '标签十三',
    type: 'default'
  },
  {
    name: '标签十四',
    type: 'default'
  },
  {
    name: '标签十五',
    type: 'default'
  },
  {
    name: '标签十六',
    type: 'default'
  },
  {
    name: '标签十七',
    type: 'default'
  },
  {
    name: '标签十八',
    type: 'default'
  },
  {
    name: '标签十九',
    type: 'default'
  },
  {
    name: '标签二十',
    type: 'default'
  },
  {
    name: '标签二十一',
    type: 'default'
  },
  {
    name: '标签二十二',
    type: 'default'
  }
])

function itemClick(item, i, e) {
  Modal.message(`当前点击的是第${i + 1}个标签`)
}
</script>
