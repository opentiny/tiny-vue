<template>
  <div>
    <tiny-button @click="onClick">生成新数据</tiny-button>
    <tiny-virtual-tree
      ref="vTree"
      width="600"
      height="400"
      row-height="36"
      scrollbar-size="6"
      :tree-op="treeOp"
    ></tiny-virtual-tree>
  </div>
</template>

<script>
import { VirtualTree, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyVirtualTree: VirtualTree,
    TinyButton: Button
  },
  computed: {
    treeOp() {
      return {
        nodeKey: 'label',
        data: this.data5,
        props: this.defaultProps,
        defaultExpandedKeys: this.defaultExpandedKeys,
        events: {
          nodeClick: this.handleNodeClick
        }
      }
    }
  },
  data() {
    return {
      defaultProps: { children: 'children', label: 'label' },
      data5: [],
      defaultExpandedKeys: []
    }
  },
  created() {
    // 生成 10000 条数据
    this.data5 = this.genTreeData(500, 20)
    this.defaultExpandedKeys = ['item-1', 'item-501']
  },
  methods: {
    onClick() {
      // 生成 12000 条数据
      this.data5 = this.genTreeData(600, 20)
    },
    genTreeData(total, level) {
      const treeData = []

      let id = 0

      const genItem = (total, level, array) => {
        for (let i = 0; i < total; i++) {
          array.push({ label: `item-${++id}` })
        }

        level--

        if (level > 0) {
          const temp = []

          array[0].children = temp
          array = temp

          genItem(total, level, array)
        }
      }

      genItem(total, level, treeData)

      return treeData
    },
    handleNodeClick(data) {
      Modal.message({ message: `${data.label}`, status: 'info' })
    }
  }
}
</script>
