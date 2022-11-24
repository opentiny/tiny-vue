<template>
  <tiny-tree
    :data="data"
    default-expand-all
    show-checkbox
    :props="props1"
  ></tiny-tree>
</template>

<script>
import { Tree } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      props1: {
        label: 'name',
        children: 'zones'
      },
      data: [
        {
          id: 1,
          name: '一级 1',
          zones: [
            {
              id: 4,
              name: '二级 1-1',
              zones: [
                {
                  id: 9,
                  name: '三级 1-1-1'
                },
                {
                  id: 10,
                  name: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: '一级 2',
          zones: [
            {
              id: 5,
              name: '二级 2-1'
            },
            {
              id: 6,
              name: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          name: '一级 3',
          zones: [
            {
              id: 7,
              name: '二级 3-1'
            },
            {
              id: 8,
              name: '二级 3-2'
            }
          ]
        }
      ]
    }
  }
}
</script>
