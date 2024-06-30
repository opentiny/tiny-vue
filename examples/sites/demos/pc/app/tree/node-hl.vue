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
      current-node-key="1-1"
      @current-change="currentChange"
      default-expand-all
    ></tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyButton: Button
  },
  data() {
    return {
      data: [
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
      ]
    }
  },
  methods: {
    getResultById(id) {
      const treeRef = this.$refs.treeRef
      // 节点数据
      const data = treeRef.getCurrentNode()
      // 节点对象
      const node = treeRef.getNode(id)
      // 节点node-key
      const nodeKey = treeRef.getCurrentKey()
      // 组件内部生成的节点唯一键值
      const innerKey = treeRef.getNodeKey(node)
      // 整个路径上节点数据的数组
      const nodePath = treeRef.getNodePath(id)
      console.log('当前高亮节点的信息为：', { data, node, nodeKey, innerKey, nodePath })
    },
    // 事件
    currentChange(data, _currentNode) {
      this.getResultById(data.id)
    },
    setHighlight() {
      const treeRef = this.$refs.treeRef
      treeRef.setCurrentKey('2-1')
      setTimeout(() => treeRef.setCurrentNode({ id: '3-1' }), 2000)
      setTimeout(() => treeRef.setCurrentNode({ id: '1-1-1' }), 4000)
      setTimeout(() => treeRef.setCurrentNode({ id: '2-2' }), 6000)
    }
  },
  mounted() {
    const node = this.$refs.treeRef.getCurrentNode()
    this.getResultById(node.id)
  }
}
</script>

<style scoped>
.node-tip {
  margin: 16px;
  font-size: 15px;
  font-weight: bold;
}
</style>
