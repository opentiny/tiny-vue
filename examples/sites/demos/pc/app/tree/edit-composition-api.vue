<template>
  <div>
    <tiny-button @click="edit('openEdit')">进入编辑</tiny-button>
    <tiny-button @click="edit('closeEdit')">取消编辑</tiny-button>
    <tiny-button @click="edit('saveEdit')">保存编辑</tiny-button>
    <br />
    <br />

    <tiny-tree ref="treeRef" node-key="id" :data="data" :default-expanded-keys="expandedKeys"></tiny-tree>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton } from '@opentiny/vue'

const expandedKeys = ref([1, 4])
const data = ref([
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
            label: '三级 1-1-1',
            children: [
              { id: 11, label: '三级 1-1-1-1' },
              { id: 12, label: '三级 1-1-1-2' }
            ]
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
        label: '二级 2-2'
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1'
      },
      {
        id: 8,
        label: '二级 3-2'
      }
    ]
  }
])
const treeRef = ref()

function edit(action) {
  if (action === 'openEdit') {
    treeRef.value.openEdit()
  } else if (action === 'closeEdit') {
    treeRef.value.closeEdit()
  } else if (action === 'saveEdit') {
    data.value = treeRef.value.saveEdit()
  }
}
</script>
