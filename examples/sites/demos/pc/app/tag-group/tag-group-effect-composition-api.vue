<template>
  <div class="tiny-demo-tag-group-effect">
    <div>深色标签</div>
    <tiny-tag-group :data="items" effect="dark"> </tiny-tag-group>
    <div>浅色标签</div>
    <tiny-tag-group :data="items" effect="light"> </tiny-tag-group>
    <div>朴素标签</div>
    <tiny-tag-group :data="items" effect="plain"> </tiny-tag-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup } from '@opentiny/vue'

const items = ref([
  { type: 'info', name: '标签' },
  { type: 'success', name: '标签' },
  { type: 'warning', name: '标签' },
  { type: 'danger', name: '标签' },
  { name: '标签' }
])
</script>

<style scoped>
.tiny-demo-tag-group-effect > *:not(:last-child) {
  margin-bottom: 12px;
}
</style>
