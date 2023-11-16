<template>
  <tiny-transfer
    ref="transferRef"
    v-model="value"
    :props="{ key: 'id', disabled: 'disabled' }"
    :tree-op="treeConfig"
    filterable
    :data="treeData"
    :render="renderTree"
    :right-default-checked="[5]"
    :left-default-checked="[3]"
  >
  </tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Transfer as TinyTransfer, Tree } from '@opentiny/vue'

const value = ref([3, 4, 5])
const renderTree = ref({
  plugin: Tree
})
const treeData = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 6,
        label: '二级 2-2',
        disabled: true
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1',
        disabled: true
      },
      {
        id: 8,
        label: '二级 3-2'
      }
    ]
  }
])
const treeConfig = ref({
  showCheckbox: true,
  nodeKey: 'id',
  checkStrictly: true,
  filterNodeMethod(query, data) {
    return data.label.includes(query)
  }
})
</script>
