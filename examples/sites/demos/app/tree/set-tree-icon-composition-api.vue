<template>
  <tiny-tree :shrink-icon="IconMinusSquare" :expand-icon="IconPlusSquare" :data="data5"> </tiny-tree>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'
import { iconPlusSquare, iconMinusSquare } from '@opentiny/vue-icon'

const IconPlusSquare = iconPlusSquare()
const IconMinusSquare = iconMinusSquare()
const defaultProps = ref({
  children: 'children',
  label: 'label'
})
const data5 = ref([
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
])
</script>
