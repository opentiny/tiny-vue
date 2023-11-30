<template>
  <div>
    <div class="node-tip">在开发者控制台中查看它的打印信息：</div>
    <div>
      <tiny-button @click="getChecks">查询勾选状态</tiny-button>
      <tiny-button @click="clear">清除全部勾选</tiny-button><br /><br />
      <tiny-button @click="setChecked">根据节点数据勾选/反勾选</tiny-button>
      <tiny-button @click="setCheckedByNodeKey">根据node-key勾选/反勾选 </tiny-button><br /><br />
      <tiny-button @click="setCheckedKeys">根据node-key,多值勾选</tiny-button>
      <tiny-button @click="setCheckedNodes">根据node,多值勾选</tiny-button><br /><br />
    </div>
    <tiny-tree
      ref="treeRef"
      show-checkbox
      :data="data"
      node-key="id"
      @check="check"
      @check-change="checkChange"
      default-expand-all
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
    getChecks() {
      const currentKey = this.$refs.treeRef.getCurrentKey()

      // 查询勾选的值
      const checkedKeys = this.$refs.treeRef.getCheckedKeys()
      // 查询勾选叶子的值
      const checkedKeysOnlyLeaf = this.$refs.treeRef.getCheckedKeys(true)
      // 查询勾选的节点数据
      const checkedNodes = this.$refs.treeRef.getCheckedNodes()
      // 查询勾选的叶子节点数据，且包含半选状态的节点
      const checkedNodesOnlyLeafAndHalf = this.$refs.treeRef.getCheckedNodes(true, true)
      // 查询半选的值
      const checkedHalfKeys = this.$refs.treeRef.getHalfCheckedKeys()
      // 查询半选的节点数据
      const checkedHalfNodes = this.$refs.treeRef.getHalfCheckedNodes()

      console.log('当前组件的勾选状态为： ', this.$refs.treeRef, {
        checkedKeys,
        checkedKeysOnlyLeaf,
        checkedNodes,
        checkedNodesOnlyLeafAndHalf,
        checkedHalfKeys,
        checkedHalfNodes
      })
    },
    clear() {
      this.$refs.treeRef.setCheckedKeys([])
    },
    setChecked() {
      // setChecked: (data, checked, deep) => void， deep为true时，深度勾选
      this.$refs.treeRef.setChecked({ id: '1-1' }, true, true)
      this.$refs.treeRef.setChecked({ id: '3' }, true, false)
    },
    setCheckedByNodeKey() {
      // setCheckedByNodeKey: (key, checked) => void
      this.$refs.treeRef.setCheckedByNodeKey('1-1', false)
    },
    setCheckedKeys() {
      // setCheckedKeys: (keys, leafOnly)=>void
      this.$refs.treeRef.setCheckedKeys(['1-1', '2-1', '3-1'])
    },
    setCheckedNodes() {
      // setCheckedNodes: (nodes, leafOnly)=>void  下一行设置 leafOnly, 所以 数据 1-1 没有被勾选。
      this.$refs.treeRef.setCheckedNodes([{ id: '1-1' }, { id: '2-1' }, { id: '3-1' }], true)
    },
    check(data, currentChecked) {
      console.log('check事件：', arguments)
    },
    checkChange(data, checked, indeterminate) {
      console.log('checkChange事件：', arguments)
    }
  }
}
</script>

<style scoped>
.node-tip {
  margin: 16px;
  font-size: 15px;
  font-weight: bold;
}
</style>
