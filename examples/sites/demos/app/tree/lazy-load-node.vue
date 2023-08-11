<template>
  <tiny-tree show-checkbox :load="loadNode1" lazy :indent="50"></tiny-tree>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  methods: {
    loadNode1(node, resolve) {
      if (node.level === 0) {
        return resolve([
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
        ])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [
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

        resolve(data)
      }, 500)
    }
  }
}
</script>
