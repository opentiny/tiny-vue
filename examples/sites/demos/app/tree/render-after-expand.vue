<template>
  <tiny-tree :data="data" :props="defaultProps" :render-after-expand="false" @node-click="handleNodeClick"></tiny-tree>
</template>

<script lang="jsx">
import { Tree, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data: [
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
      ]
    }
  },
  methods: {
    handleNodeClick(data) {
      Modal.message({ message: `${data.label}`, status: 'info' })
    }
  }
}
</script>
