<template>
  <div>
    <tiny-tree lazy :load="load" :afterLoad="afterLoad" @load-data="loadedData"></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'

function load(node, resolve) {
  // node为点击的节点， resolve为回调函数，用于异步返回下层节点的数据
  console.log('即将加载节点下级数据：', node)

  // 通过 level =0 来识别第一次加载
  if (node.level === 0) {
    resolve([
      { id: '1', label: '#数据 1' },
      { id: '2', label: '#数据 2' },
      { id: '3', label: '#数据 3' }
    ])
  }
  // 通过 data 有值，识别是用户点击后的加载
  else if (node.data) {
    const parentId = node.data.id
    const parentLabel = node.data.label

    const children = Array.from({ length: 5 }, (v, k) => k + 1).map((num) => ({
      id: `${parentId}-${num}`,
      label: `${parentLabel}-${num}`,
      disabled: Math.random() - 0.5 > 0, // 随机禁用节点
      isLeaf: Math.random() - 0.5 > 0 // 随机设置叶子节点
    }))

    // 模拟异步返回
    setTimeout(() => resolve(children), Math.random() * 2 * 1000)
  }
}
function afterLoad(data) {
  console.log('afterLoad属性触发：', data)
}
function loadedData(data) {
  console.log('load-data 事件触发：', data)
}
</script>
