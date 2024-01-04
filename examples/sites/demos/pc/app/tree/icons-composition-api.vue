<template>
  <div class="icon-demo">
    <tiny-tree :data="data" :icon="icon"></tiny-tree>
    <tiny-tree
      :data="data"
      :expand-icon="expandIcon"
      expand-icon-color="red"
      :shrink-icon="shrinkIcon"
      shrink-icon-color="blue"
    ></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'
import { iconPlusSquare, iconMinusSquare, iconRightO } from '@opentiny/vue-icon'

const icon = iconRightO()
const shrinkIcon = iconMinusSquare()
const expandIcon = iconPlusSquare()
const data = ref([
  {
    id: '1',
    label: '数据 1',
    children: [{ id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1' }] }]
  },
  {
    id: '2',
    label: '数据 2',
    children: [
      { id: '2-1', label: '数据 2-1' },
      { id: '2-2', label: '数据 2-2' }
    ]
  },
  {
    id: '3',
    label: '数据 3',
    children: [{ id: '3-1', label: '数据 3-1' }]
  }
])
</script>

<style scoped>
.icon-demo {
  display: flex;
  margin: 16px;
}
.icon-demo .tiny-tree {
  flex: 1;
}
</style>
