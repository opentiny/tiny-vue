<template>
  <tiny-tag-group :data="data"></tiny-tag-group>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup } from '@opentiny/vue'

const data = ref([
  {
    name: '标签一',
    type: 'success'
  },
  {
    name: '标签二',
    type: 'warning'
  },
  {
    name: '标签三',
    type: 'alerting'
  },
  {
    name: '标签四',
    type: 'error'
  },
  {
    name: '标签五',
    type: 'info'
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
  }
])
</script>
