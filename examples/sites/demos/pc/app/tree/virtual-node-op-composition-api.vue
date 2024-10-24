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
      :node-height="50"
      :tree-height="400"
      node-key="id"
      default-expand-all
      :current-node-key="currentNodeKey"
    ></tiny-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton } from '@opentiny/vue'

let id = 1000
const treeRef = ref()
const currentNodeKey = ref('1')
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

const generateTreeData = (num) => {
  const data = []
  for (let i = 0; i < num; i++) {
    const children = []
    for (let j = 0; j < Math.floor(Math.random() * 3) + 2; j++) {
      children.push({
        label: `数据 ${i}-${j}`,
        children: [], // 子节点可以继续递归生成,
        id: `${i}-${j}`
      })
    }
    data.push({
      label: `数据 ${i}`,
      children,
      id: `${i}`
    })
  }
  return data
}

const data = generateTreeData(100)
</script>
