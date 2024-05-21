<template>
  <div>场景1：下拉树单选</div>
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
  <div>场景2：下拉树多选</div>
  <tiny-base-select v-model="value2" multiple>
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
  <div>场景3：下拉树可搜索</div>
  <tiny-base-select v-model="value3" filterable clearable :filter-method="filterMethod">
    <template #panel="{ props: { state }, methods: { updateModelValue } }">
      <tiny-tree
        ref="treeRef"
        :data="treeData"
        :expand-on-click-node="false"
        :icon-trigger-click-node="false"
        :default-expand-all="true"
        :filter-node-method="filter"
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
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { BaseSelect as TinyBaseSelect, Tree as TinyTree } from '@opentiny/vue'

const value = ref()
const value2 = ref([])
const value3 = ref()

const treeRef = ref()

const treeData = ref([
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
])

const filterMethod = (value) => {
  treeRef.value.filter(value)
}

const filter = (value, data) => {
  if (!value) return true

  return data.label.includes(value)
}
</script>

<style scoped>
.tiny-base-select {
  width: 280px;
}
</style>
