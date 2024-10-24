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
      :nodeHeight="50"
      :treeHeight="400"
      node-key="id"
      default-expand-all
      :current-node-key="currentNodeKey"
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
      id: 1000, // 新节点的id 从1000递增
      data: this.generateTreeData(100)
    }
  },
  methods: {
    generateTreeData(num) {
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
    },
    insertBefore() {
      const currentKey = this.$refs.treeRef.getCurrentKey()

      this.$refs.treeRef.insertBefore({ id: this.id, label: 'insertBefore ' + this.id }, currentKey)
      this.id++
    },
    insertAfter() {
      const currentKey = this.$refs.treeRef.getCurrentKey()
      this.$refs.treeRef.insertAfter({ id: this.id, label: 'insertAfter ' + this.id }, currentKey)
      this.id++
    },
    append() {
      const currentKey = this.$refs.treeRef.getCurrentKey()
      this.$refs.treeRef.append({ id: this.id, label: 'append ' + this.id }, currentKey)

      this.id++
    },
    updateKeyChildren() {
      const currentKey = this.$refs.treeRef.getCurrentKey()

      this.$refs.treeRef.updateKeyChildren(currentKey, [{ id: this.id, label: 'update ' + this.id }])
      this.id++
    },
    remove() {
      const currentKey = this.$refs.treeRef.getCurrentKey()
      this.$refs.treeRef.remove(currentKey)
    }
  }
}
</script>
