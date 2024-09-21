<template>
  <div>
    <tiny-tree
      :data="data"
      :nodeHeight="50"
      :treeHeight="400"
      :show-line="showLine === 'show'"
      default-expand-all
      class="tiny-tree"
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
  }
}
</script>

<style scoped></style>
