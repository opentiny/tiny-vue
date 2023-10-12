<template>
  <div>
    <span>深色标签 </span>
    <tiny-tag-group :data="items" effect="dark"> </tiny-tag-group>
    <br />
    <span>浅色标签 </span>
    <tiny-tag-group :data="items" effect="light"> </tiny-tag-group>
    <br />
    <span>朴素标签 </span>
    <tiny-tag-group :data="items" effect="plain"> </tiny-tag-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup } from '@opentiny/vue'

const items = ref([
  { name: '标签一' },
  { type: 'info', name: '标签二' },
  { type: 'success', name: '标签三' },
  { type: 'warning', name: '标签四' },
  { type: 'danger', name: '标签五' },
  { name: '标签六' }
])
</script>
