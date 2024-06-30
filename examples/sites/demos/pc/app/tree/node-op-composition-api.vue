<template>
  <div>
    <div>
      <tiny-button @click="insertBefore">添加前节点</tiny-button>
      <tiny-button @click="insertAfter">添加后节点</tiny-button>
      <tiny-button @click="append">添加子节点</tiny-button>
      <tiny-button @click="updateKeyChildren">更新子节点</tiny-button>
      <tiny-button @click="remove">删除当前节点</tiny-button>
    </div>
    <tiny-tree
      ref="treeRef"
      :data="data"
      node-key="id"
      default-expand-all
      :current-node-key="currentNodeKey"
    ></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton } from '@opentiny/vue'

let id = 1000
const treeRef = ref()
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
const currentNodeKey = ref('1-1')
function insertBefore() {
  const currentKey = treeRef.value.getCurrentKey()

  treeRef.value.insertBefore({ id, label: 'insertBefore ' + id }, currentKey)
  id++
}

function insertAfter() {
  const currentKey = treeRef.value.getCurrentKey()
  treeRef.value.insertAfter({ id, label: 'insertAfter ' + id }, currentKey)
  id++
}
function append() {
  const currentKey = treeRef.value.getCurrentKey()
  treeRef.value.append({ id, label: 'append ' + id }, currentKey)

  id++
}
function updateKeyChildren() {
  const currentKey = treeRef.value.getCurrentKey()

  treeRef.value.updateKeyChildren(currentKey, [{ id, label: 'update ' + id }])
  id++
}
function remove() {
  const currentKey = treeRef.value.getCurrentKey()
  treeRef.value.remove(currentKey)
}
</script>
