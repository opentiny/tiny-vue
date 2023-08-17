<template>
  <tiny-tree :data="data">
    <template #empty>
      <span>没有提供有效数据</span>
    </template>
  </tiny-tree>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'

const data = ref([])
</script>
