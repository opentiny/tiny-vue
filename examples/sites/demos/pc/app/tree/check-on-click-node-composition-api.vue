<template>
  <div>
    <tiny-button @click="getCheckedKeys" title="获取选中数据的 keys">获取选中数据的 keys</tiny-button>
    <tiny-button @click="getCheckedNodes" title="获取选中标识的数据">获取选中标识的数据</tiny-button>{{ checkedNodes }}
    <tiny-button @click="getHalfCheckedKeys" title="获取半勾选数据的 keys">获取半勾选数据的 keys</tiny-button>
    <tiny-button @click="getHalfCheckedNodes" title="获取半勾选的数据">获取半勾选的数据</tiny-button
    >{{ halfCheckedNodes }}
    <tiny-tree
      :data="data"
      default-expand-all
      show-checkbox
      ref="treeRef"
      node-key="id"
      :check-on-click-node="true"
      icon-trigger-click-node
      @node-click="nodeClick"
    ></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton, Modal } from '@opentiny/vue'

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
const checkedNodes = ref([])
const halfCheckedNodes = ref([])
const treeRef = ref()

function getCheckedKeys() {
  Modal.alert({
    message: JSON.stringify(treeRef.value.getCheckedKeys()),
    lockView: false,
    mask: false
  })
}

function getCheckedNodes() {
  checkedNodes.value = treeRef.value.getCheckedNodes()
}

function getHalfCheckedKeys() {
  Modal.alert({
    message: JSON.stringify(treeRef.value.getHalfCheckedKeys()),
    lockView: false,
    mask: false
  })
}

function getHalfCheckedNodes() {
  halfCheckedNodes.value = treeRef.value.getHalfCheckedNodes()
}

function nodeClick() {
  Modal.message('点击节点后的事件')
}
</script>
