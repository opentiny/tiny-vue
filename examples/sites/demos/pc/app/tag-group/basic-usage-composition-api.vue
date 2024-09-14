<template>
  <tiny-tag-group :data="data"></tiny-tag-group>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup } from '@opentiny/vue'

const data = ref([
  { type: 'info', name: '标签' },
  { type: 'success', name: '标签' },
  { type: 'warning', name: '标签' },
  { type: 'danger', name: '标签' },
  { name: '标签' }
])
</script>
