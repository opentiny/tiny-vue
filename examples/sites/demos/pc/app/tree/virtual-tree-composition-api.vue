<template>
  <div>
    <tiny-tree
      :data="data"
      :nodeHeight="50"
      :treeHeight="400"
      :show-line="showLine === 'show'"
      default-expand-all
      class="tiny-tree"
      @node-click="nodeClick"
    ></tiny-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'

const showLine = ref('hide')
const generateTreeData = (num) => {
  const data = []
  for (let i = 0; i < num; i++) {
    const children = []
    for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
      children.push({
        label: `数据 ${i}-${j}`,
        children: [],
        id: i.toString()
      })
    }
    data.push({
      label: `数据 ${i}`,
      children,
      id: i.toString()
    })
  }
  return data
}
const data = generateTreeData(100)
const nodeClick = (data, node, vm) => {
  console.log('点击节点事件：', { data, node, vm })
}
</script>
