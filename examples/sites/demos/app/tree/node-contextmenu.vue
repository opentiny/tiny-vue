<template>
  <tiny-tree
    :data="data"
    default-expand-all
    show-checkbox
    @node-contextmenu="nodeContextmenu"
    @current-change="currentChange"
  ></tiny-tree>
</template>

<script lang="jsx">
import { Tree, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      data: [
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
  },
  methods: {
    nodeContextmenu() {
      Modal.message('当节点被鼠标右键点击时会触发该事件')
    },
    currentChange() {
      Modal.message('点击节点时触发的事件')
    }
  }
}
</script>
