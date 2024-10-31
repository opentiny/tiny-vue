<template>
  <div class="virtual-tree">
    <tiny-tree
      :data="data"
      enable
      :tree-height="350"
      :show-line="false"
      default-expand-all
      @node-click="nodeClick"
    ></tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      showLine: 'hide',
      data: this.generateTreeData(100)
    }
  },
  methods: {
    generateTreeData(num) {
      const data = []
      for (let i = 0; i < num; i++) {
        const children = []
        for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
          // 每个节点随机生成1-3个子节点
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
    },
    nodeClick(data, node, vm) {
      console.log('点击节点事件：', { data, node, vm })
    }
  }
}
</script>

<style scoped>
.virtual-tree {
  width: 800px;
}
</style>
