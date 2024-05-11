<template>
  <div class="expand-demo">
    <div>
      <div class="tip">默认展开全部，且点击任意地方展开节点</div>
      <div class="tip">
        <tiny-button @click="toggleAll">切换全部展开收起</tiny-button>
      </div>
      <tiny-tree
        ref="tree1Ref"
        :data="data"
        default-expand-all
        @node-expand="nodeExpand"
        @node-collapse="nodeCollapse"
      ></tiny-tree>
    </div>
    <div style="margin-left: 30px">
      <div class="tip">默认展开节点2，仅点击图标才展开节点</div>
      <div class="tip">
        <tiny-button @click="expandHlNode">展开高亮</tiny-button>
        <tiny-button @click="collapseHlNode">收起高亮</tiny-button>
      </div>
      <tiny-tree
        ref="tree2Ref"
        :data="data"
        node-key="id"
        :default-expanded-keys="['2']"
        current-node-key="2"
        :expand-on-click-node="false"
      ></tiny-tree>
    </div>
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
      isExpandAll: true,
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
    toggleAll() {
      this.isExpandAll = !this.isExpandAll
      this.$refs.tree1Ref.expandAllNodes(this.isExpandAll)
    },
    expandHlNode() {
      const data = this.$refs.tree2Ref.getCurrentNode()
      const node = this.$refs.tree2Ref.getNode(data.id)
      node.expand()
    },
    collapseHlNode() {
      const data = this.$refs.tree2Ref.getCurrentNode()
      const node = this.$refs.tree2Ref.getNode(data.id)
      node.collapse()
    },
    nodeExpand(data, node, vm) {
      console.log('展开节点：', { data, node, vm })
    },
    nodeCollapse(data, node, vm) {
      console.log('收起节点：', { data, node, vm })
    }
  }
}
</script>

<style scoped>
.expand-demo {
  display: flex;
  margin: 16px;
}
.expand-demo .tiny-tree {
  flex: 1;
}

.tip {
  margin-bottom: 16px;
  font-weight: bold;
}
</style>
