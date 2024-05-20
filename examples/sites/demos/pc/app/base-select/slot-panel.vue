<template>
  <p>场景1：下拉树单选</p>
  <tiny-base-select v-model="value">
    <template #panel="{ props: { state }, methods: { updateModelValue } }">
      <tiny-tree
        :data="treeData"
        :expand-on-click-node="false"
        :icon-trigger-click-node="false"
        :default-expand-all="true"
        @node-click="
          (data) => {
            state.visible = false
            updateModelValue(data.id)
            nextTick(() => {
              state.selectedLabel = data.label
            })
          }
        "
      ></tiny-tree>
    </template>
  </tiny-base-select>
  <p>场景2：下拉树多选</p>
  <tiny-base-select v-model="value2" :multiple="true">
    <template #panel="{ props: { state }, methods: { updateModelValue } }">
      <tiny-tree
        :data="treeData"
        :expand-on-click-node="false"
        :icon-trigger-click-node="false"
        :default-expand-all="true"
        :show-checkbox="true"
        @check="
          (data, { checkedKeys, checkedNodes }) => {
            updateModelValue(checkedNodes.map((node) => node.id))
            nextTick(() => {
              state.selected = state.selected.map((item) => {
                return {
                  ...item,
                  currentLabel: checkedNodes.find((node) => node.id === item.value).label
                }
              })
            })
          }
        "
      ></tiny-tree>
    </template>
  </tiny-base-select>
</template>

<script>
import { BaseSelect, Tree } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect,
    TinyTree: Tree
  },
  data() {
    return {
      value: '',
      value2: [],
      treeData: [
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.tiny-base-select {
  width: 280px;
}
</style>
