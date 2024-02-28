<template>
  <div>
    <div class="node-tip">在开发者控制台中查看它的打印信息：</div>
    <div>
      <tiny-button @click="getChecks">查询勾选状态</tiny-button>
      <tiny-button @click="setCurrentRadio">勾选指定节点</tiny-button><br /><br />
    </div>
    <tiny-tree
      ref="treeRef"
      show-radio
      :data="data"
      node-key="id"
      :default-checked-keys="defaultRadioKey"
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
      defaultRadioKey: ['1-1'],
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
    setCurrentRadio() {
      this.defaultRadioKey = ['3-1']
      this.$refs.treeRef.setCurrentRadio()
    },
    checkChange(data, checked, indeterminate) {
      console.log('checkChange事件：', { data, checked, indeterminate })
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
