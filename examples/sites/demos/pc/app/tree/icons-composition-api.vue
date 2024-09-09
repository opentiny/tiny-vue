<template>
  <div class="icon-demo">
    <tiny-tree :data="data" :icon="icon"></tiny-tree>
    <tiny-tree
      :data="data"
      show-checkbox
      :expand-icon="expandIcon"
      expand-icon-color="#c2c2c2"
      :shrink-icon="shrinkIcon"
      shrink-icon-color="#191919"
    >
      <template #prefix="{ node }">
        <component v-if="node.data.icon === 'file'" :is="tinyIconFile"></component>
        <component v-else :is="tinyIconEditorTable"></component>
      </template>
    </tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'
import { iconPutAway, iconExpand, iconRightO, iconEditorTable, iconFile } from '@opentiny/vue-icon'

const icon = iconRightO()
const shrinkIcon = iconPutAway()
const expandIcon = iconExpand()
const tinyIconEditorTable = iconEditorTable()
const tinyIconFile = iconFile()

const data = ref([
  {
    id: '1',
    label: '数据 1',
    children: [
      { id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1' }] },
      { id: '1-2', label: '数据 1-2' }
    ]
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
