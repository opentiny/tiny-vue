<template>
  <tiny-tag-group :data="data"></tiny-tag-group>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup } from '@opentiny/vue'

const data = ref([
  {
    name: '标签一',
  },
  {
    name: '标签二',
    type: 'info'
  },
  {
    name: '标签三',
    type: 'success'
  },
  {
    name: '标签四',
    type: 'warning'
  },
  {
    name: '标签五',
    type: 'danger'
  },
  {
    name: '标签六',
    type: 'info'
  },
  {
    name: '标签七',
    type: 'success'
  },
  {
    name: '标签八',
    type: 'warning'
  },
  {
    name: '标签九',
    type: 'danger'
  }
])
</script>
