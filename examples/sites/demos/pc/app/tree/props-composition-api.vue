<template>
  <div>
    <tiny-tree :data="data" :props="props" default-expand-all></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'

const props = ref({
  children: 'children',
  label: 'name', // 别名
  disabled: 'disabled',
  isLeaf: 'isLeaf'
})
const data = ref([
  {
    id: '1',
    name: '数据 1',
    children: [
      { id: '1-1', name: '数据 1-1', children: [{ id: '1-1-1', name: '数据 1-1-1' }] },
      { id: '1-2', name: '数据 1-2' }
    ]
  },
  {
    id: '2',
    name: '数据 2',
    disabled: true,
    children: [
      { id: '2-1', name: '数据 2-1', disabled: true },
      { id: '2-2', name: '数据 2-2', disabled: true }
    ]
  },
  {
    id: '3',
    name: '数据 3',
    children: [{ id: '3-1', name: '数据 3-1' }]
  }
])
</script>
