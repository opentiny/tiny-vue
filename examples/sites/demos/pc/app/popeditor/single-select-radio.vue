<template>
  <tiny-popeditor
    v-model="value"
    popseletor="tree"
    title="树模式"
    :tree-op="treeOp"
    value-field="id"
    text-field="label"
  ></tiny-popeditor>
</template>

<script>
import { Popeditor } from '@opentiny/vue'

export default {
  components: {
    TinyPopeditor: Popeditor
  },
  data() {
    const dataset = [
      {
        id: 1,
        label: '一级 1',
        disabled: true,
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
        disabled: true,
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
    ]
    return {
      value: 2,
      treeOp: {
        data: dataset,
        nodeKey: 'id',
        showRadio: true,
        checkStrictly: true
      }
    }
  }
}
</script>
