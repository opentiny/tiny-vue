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

<script>
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
    openEdit() {
      this.$refs.treeRef.openEdit()
    },
    closeEdit() {
      this.$refs.treeRef.closeEdit()
    },
    saveEdit() {
      this.data = this.$refs.treeRef.saveEdit()
    },
    addNode() {
      const data = this.$refs.treeRef.getCurrentNode()
      const node = this.$refs.treeRef.getNode(data.id)
      this.$refs.treeRef.addNode(node)
    },
    editNode() {
      const data = this.$refs.treeRef.getCurrentNode()
      const node = this.$refs.treeRef.getNode(data.id)
      this.$refs.treeRef.editNode(node)
    },
    saveNode() {
      // 离开编辑节点，会立即保存。 也可以通过以下手动触发保存
      setTimeout(() => this.$refs.treeRef.saveNode(), 5000)
    }
  }
}
</script>
