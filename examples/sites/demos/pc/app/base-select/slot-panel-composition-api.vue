<template>
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
</template>

<script setup>
import { ref } from 'vue'
import { BaseSelect as TinyBaseSelect, Tree as TinyTree } from '@opentiny/vue'

const value = ref('')

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
</script>

<style scoped>
.tiny-base-select {
  width: 280px;
}
</style>
