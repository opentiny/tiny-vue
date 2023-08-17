<template>
  <tiny-tree
    :data="data"
    default-expand-all
    draggable
    @node-drag-start="dragStart"
    @node-drag-over="dragOver"
    @node-drag-enter="dragEnter"
    @node-drag-leave="dragLeave"
    @node-drag-end="dragEnd"
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
    dragStart() {
      Modal.message('拖拽节点开始时触发的事件')
    },
    dragOver() {
      Modal.message('拖拽节点时触发的事件')
    },
    dragEnter() {
      Modal.message('拖拽进入其他节点时触发的事件')
    },
    dragLeave() {
      Modal.message('拖拽离开节点时触发的事件')
    },
    dragEnd() {
      Modal.message('拖拽结束时触发的事件')
    }
  }
}
</script>
