<template>
  <div>
    <tiny-button @click="openEdit">进入编辑</tiny-button>
    <tiny-button @click="closeEdit">取消编辑</tiny-button>
    <tiny-button @click="saveEdit">保存编辑</tiny-button> <br />
    <br />
    <tiny-button @click="addNode">新建子节点</tiny-button>
    <tiny-button @click="editNode">编辑节点</tiny-button>
    <tiny-button @click="saveNode">5s后保存节点</tiny-button> <br />
    <br />
    <tiny-tree ref="treeRef" node-key="id" :data="data" current-node-key="1" default-expand-all></tiny-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton } from '@opentiny/vue'

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
const treeRef = ref()

function openEdit() {
  treeRef.value.openEdit()
}
function closeEdit() {
  treeRef.value.closeEdit()
}
function saveEdit() {
  data.value = treeRef.value.saveEdit()
}
function addNode() {
  const data = treeRef.value.getCurrentNode()
  const node = treeRef.value.getNode(data.id)
  treeRef.value.addNode(node)
}
function editNode() {
  const data = treeRef.value.getCurrentNode()
  const node = treeRef.value.getNode(data.id)
  treeRef.value.editNode(node)
}
function saveNode() {
  // 离开编辑节点，会立即保存。 也可以通过以下手动触发保存
  setTimeout(() => treeRef.value.saveNode(), 5000)
}
</script>
