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
        :current-node-key="'2'"
        :expand-on-click-node="false"
      ></tiny-tree>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton } from '@opentiny/vue'

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
const isExpandAll = ref(true)
const tree1Ref = ref()
const tree2Ref = ref()

function toggleAll() {
  isExpandAll.value = !isExpandAll.value
  tree1Ref.value.expandAllNodes(isExpandAll.value)
}
function expandHlNode() {
  const data = tree2Ref.value.getCurrentNode()
  const node = tree2Ref.value.getNode(data.id)
  node.expand()
}
function collapseHlNode() {
  const data = tree2Ref.value.getCurrentNode()
  const node = tree2Ref.value.getNode(data.id)
  node.collapse()
}
function nodeExpand(data, node, vm) {
  console.log('展开节点：', { data, node, vm })
}
function nodeCollapse(data, node, vm) {
  console.log('收起节点：', { data, node, vm })
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
