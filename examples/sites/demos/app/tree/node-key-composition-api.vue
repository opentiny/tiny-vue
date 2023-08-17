<template>
  <div class="node-key">
    <tiny-row :flex="true">
      <tiny-col :span="6">
        <tiny-button @click="setCurrentKey" title="设置当前选中的节点的 key">设置当前选中的节点的 key</tiny-button>
      </tiny-col>
      <tiny-col :span="6">
        <tiny-button @click="setCurrentNode" title="设置当前选中的节点">设置当前选中的节点</tiny-button>
      </tiny-col>
    </tiny-row>

    <tiny-row :flex="true">
      <tiny-col :span="6">
        <tiny-button @click="getCurrentKey" title="获取当前被选中节点的 key">获取当前被选中节点的 key</tiny-button>
        {{ currentKey }}
      </tiny-col>
      <tiny-col :span="6">
        <tiny-button @click="getCurrentNode" title="获取当前选中的节点">获得当前选中的节点</tiny-button
        >{{ currentNode }}
      </tiny-col>
    </tiny-row>

    <tiny-row :flex="true">
      <tiny-col :span="6">
        <tiny-button @click="addNode" title="为 Tree 中的一个节点追加一个子节点"
          >为 Tree 中的一个节点追加一个子节点</tiny-button
        >
      </tiny-col>
      <tiny-col :span="6">
        <tiny-button @click="insertAfter" title="根据节点数据在父节点下插入一个子节点"
          >根据节点数据在父节点下插入一个子节点</tiny-button
        >
      </tiny-col>
    </tiny-row>

    <tiny-row :flex="true">
      <tiny-col :span="6">
        <tiny-button @click="insertBefore" title="为 Tree 的一个节点的前面增加一个节点"
          >为 Tree 的一个节点的前面增加一个节点</tiny-button
        >
      </tiny-col>
      <tiny-col :span="6">
        <tiny-button @click="remove" title="删除节点">删除节点</tiny-button>
      </tiny-col>
    </tiny-row>

    <tiny-tree :data="data" ref="treeRef" default-expand-all node-key="id"></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton, Row as TinyRow, Col as TinyCol } from '@opentiny/vue'

const data = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 6,
        label: '二级 2-2'
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1'
      },
      {
        id: 8,
        label: '二级 3-2'
      }
    ]
  }
])
const currentNode = ref([])
const currentKey = ref('')
const id = ref(111)
const treeRef = ref()

function getCurrentNode() {
  currentNode.value = treeRef.value.getCurrentNode()
}

function getCurrentKey() {
  currentKey.value = treeRef.value.getCurrentKey()
}

function setCurrentKey() {
  treeRef.value.setCurrentKey(5)
}

function setCurrentNode() {
  treeRef.value.setCurrentNode({ id: 10, label: '三级 1-1-2' })
}

function addNode() {
  treeRef.value.append({ id: id.value++, label: '三级 1-1-3' }, 4)
}

function insertAfter() {
  treeRef.value.insertAfter({ id: 12, label: '一级 4', children: [{ id: 14, label: '二级 4-1' }] }, 3)
}

function insertBefore() {
  treeRef.value.insertBefore({ id: 13, label: '一级 5', children: [{ id: 15, label: '二级 5-1' }] }, 3)
}

function remove() {
  treeRef.value.remove(2)
}
</script>

<style lang="css" scoped>
.node-key .tiny-row {
  margin-top: 10px;
}
.node-key .tiny-button {
  max-width: 300px;
}
</style>
