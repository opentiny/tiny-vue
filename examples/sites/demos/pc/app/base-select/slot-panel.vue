<template>
  <div>场景1：下拉树单选</div>
  <tiny-base-select v-model="value">
    <template #panel="{ methods: { updateSelectedData, hidePanel } }">
      <tiny-tree
        :data="treeData"
        :expand-on-click-node="false"
        :icon-trigger-click-node="false"
        :default-expand-all="true"
        @node-click="
          (data) => {
            updateSelectedData({
              ...data,
              currentLabel: data.label,
              value: data.id,
              state: {
                currentLabel: data.label
              }
            })

            hidePanel()
          }
        "
      ></tiny-tree>
    </template>
  </tiny-base-select>
  <div>场景2：下拉树多选</div>
  <tiny-base-select v-model="value2" multiple>
    <template #panel="{ methods: { updateSelectedData } }">
      <tiny-tree
        :data="treeData"
        :expand-on-click-node="false"
        :icon-trigger-click-node="false"
        :default-expand-all="true"
        :show-checkbox="true"
        @check="
          (data, { checkedNodes }) => {
            updateSelectedData(
              checkedNodes.map((node) => {
                return {
                  ...node,
                  currentLabel: node.label,
                  value: node.id
                }
              })
            )
          }
        "
      ></tiny-tree>
    </template>
  </tiny-base-select>
  <div>场景3：下拉树可搜索</div>
  <tiny-base-select v-model="value3" filterable clearable :filter-method="filterMethod">
    <template #panel="{ methods: { updateSelectedData, hidePanel } }">
      <tiny-tree
        ref="treeRef"
        :data="treeData"
        :expand-on-click-node="false"
        :icon-trigger-click-node="false"
        :default-expand-all="true"
        :filter-node-method="filter"
        @node-click="
          (data) => {
            updateSelectedData({
              ...data,
              currentLabel: data.label,
              value: data.id,
              state: {
                currentLabel: data.label
              }
            })

            hidePanel()
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
      value2: '',
      value3: '',
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
  },
  methods: {
    filterMethod(value) {
      this.$refs.treeRef.filter(value)
    },
    filter(value, data) {
      if (!value) return true

      return data.label.includes(value)
    }
  }
}
</script>

<style scoped>
.tiny-base-select {
  width: 280px;
}
</style>
