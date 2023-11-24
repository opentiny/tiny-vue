<template>
  <div class="expand-demo">
    <div>
      <div class="tip">默认展开全部，且点击任意地方展开节点</div>
      <tiny-tree :data="data" default-expand-all @node-expand="nodeExpand" @node-collapse="nodeCollapse"></tiny-tree>
    </div>
    <div style="margin-left: 30px">
      <div class="tip">默认展开节点2，仅点击图标才展开节点</div>
      <tiny-tree :data="data" node-key="id" :default-expanded-keys="['2']" :expand-on-click-node="false"></tiny-tree>
    </div>
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
      data: [
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
      ]
    }
  },
  methods: {
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
