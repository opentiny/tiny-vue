<template>
  <div>
    <div class="node-tip">点击节点后， 在开发者控制台中查看它的打印信息：</div>
    <div>
      <tiny-button @click="setHighlight">手动高亮节点</tiny-button>
    </div>
    <tiny-tree
      ref="treeRef"
      :data="data"
      node-key="id"
      highlight-current
      :current-node-key="'1-1'"
      @current-change="currentChange"
      default-expand-all
    ></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { onMounted, ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton } from '@opentiny/vue'

const treeRef = ref()
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

function getResultById(id) {
  // 节点数据
  const data = treeRef.value.getCurrentNode()
  // 节点对象
  const node = treeRef.value.getNode(id)
  // 节点node-key
  const nodeKey = treeRef.value.getCurrentKey()
  // 组件内部生成的节点唯一键值
  const innerKey = treeRef.value.getNodeKey(node)
  // 整个路径上节点数据的数组
  const nodePath = treeRef.value.getNodePath(id)
  console.log('当前高亮节点的信息为：', { data, node, nodeKey, innerKey, nodePath })
}
// 事件
function currentChange(data, currentNode) {
  getResultById(data.id)
}
function setHighlight() {
  treeRef.value.setCurrentKey('2-1')
  setTimeout(() => treeRef.value.setCurrentNode({ id: '3-1' }), 2000)
  setTimeout(() => treeRef.value.setCurrentNode({ id: '1-1-1' }), 4000)
  setTimeout(() => treeRef.value.setCurrentNode({ id: '2-2' }), 6000)
}

onMounted(() => {
  const node = treeRef.value.getCurrentNode()
  getResultById(node.id)
})
</script>

<style scoped>
.node-tip {
  margin: 16px;
  font-size: 15px;
  font-weight: bold;
}
</style>
