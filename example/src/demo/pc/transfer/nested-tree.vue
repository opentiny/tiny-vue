<template>
  <tiny-transfer
    ref="transfer"
    v-model="value"
    :props="{ key: 'id', disabled: 'disabled' }"
    :tree-op="treeConfig"
    filterable
    :data="treeData"
    :render="renderTree"
    :right-default-checked="[5]"
    :left-default-checked="[3]"
  >
  </tiny-transfer>
</template>

<script>
import { Transfer } from '@opentiny/vue'
import Tree from '@opentiny/vue-tree'

export default {
  components: {
    TinyTransfer: Transfer
  },
  data() {
    return {
      value: [3, 4, 5],
      renderTree: {
        plugin: Tree
      },
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
              label: '二级 2-2',
              disabled: true
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
              disabled: true
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      treeConfig: {
        showCheckbox: true,
        nodeKey: 'id',
        checkStrictly: true,
        filterNodeMethod: function (query, data) {
          return data.label.indexOf(query) > -1
        }
      }
    }
  }
}
</script>
