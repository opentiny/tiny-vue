<template>
  <tiny-tree :data="data5" node-key="id" :auto-expand-parent="false" :default-expanded-keys="defaultexpandedkeys"></tiny-tree>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      defaultexpandedkeys: [4],
      data5: [
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
                  label: '三级 1-1-1',
                  children: [
                    {
                      id: 19,
                      label: '四级 1-1-1'
                    },
                    {
                      id: 110,
                      label: '四级 1-1-2'
                    }
                  ]
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
              label: '二级 2-1',
              children: [
                {
                  id: 29,
                  label: '三级 2-1-1'
                },
                {
                  id: 210,
                  label: '三级 2-1-2'
                }
              ]
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
    }
  }
}
</script>
