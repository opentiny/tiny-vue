<template>
  <div>
    <span class="label">中等标签：medium </span>
    <tiny-tag-group :data="items" size="medium"> </tiny-tag-group>
    <br />
    <span class="label">小型标签：small </span>
    <tiny-tag-group :data="items" size="small"> </tiny-tag-group>
    <br />
    <span class="label">超小标签：mini </span>
    <tiny-tag-group :data="items" size="mini"> </tiny-tag-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TagGroup as TinyTagGroup } from '@opentiny/vue'

const items = ref([
  { type: 'default', name: '标签一' },
  { type: 'default', name: '标签二' },
  { type: 'default', name: '标签三' },
  { type: 'default', name: '标签四' },
  { type: 'default', name: '标签五' },
  { type: 'default', name: '标签六' }
])
</script>
