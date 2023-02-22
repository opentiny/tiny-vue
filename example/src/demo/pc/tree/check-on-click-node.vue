<template>
  <div>
    <tiny-button @click="getCheckedKeys" title="获取选中数据的 keys">获取选中数据的 keys</tiny-button>
    <tiny-button @click="getCheckedNodes" title="获取选中标识的数据">获取选中标识的数据</tiny-button>{{ checkedNodes }}
    <tiny-button @click="getHalfCheckedKeys" title="获取半勾选数据的 keys">获取半勾选数据的 keys</tiny-button>
    <tiny-button @click="getHalfCheckedNodes" title="获取半勾选的数据">获取半勾选的数据</tiny-button>{{ halfCheckedNodes }}
    <tiny-tree
      :data="data"
      default-expand-all
      show-checkbox
      ref="tree"
      node-key="id"
      :check-on-click-node="true"
      icon-trigger-click-node
      @node-click="nodeClick"
    ></tiny-tree>
  </div>
</template>

<script>
import { Tree, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyButton: Button
  },
  data() {
    return {
      data: [
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
      ],
      checkedNodes: [],
      halfCheckedNodes: []
    }
  },
  methods: {
    getCheckedKeys() {
      Modal.alert({
        message: JSON.stringify(this.$refs.tree.getCheckedKeys()),
        lockView: false,
        mask: false
      })
    },
    getCheckedNodes() {
      this.checkedNodes = this.$refs.tree.getCheckedNodes()
    },
    getHalfCheckedKeys() {
      Modal.alert({
        message: JSON.stringify(this.$refs.tree.getHalfCheckedKeys()),
        lockView: false,
        mask: false
      })
    },
    getHalfCheckedNodes() {
      this.halfCheckedNodes = this.$refs.tree.getHalfCheckedNodes()
    },
    nodeClick() {
      Modal.message('点击节点后的事件')
    }
  }
}
</script>
