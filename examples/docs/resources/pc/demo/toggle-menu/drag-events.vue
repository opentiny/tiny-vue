<template>
  <tiny-toggle-menu
    :data="datas"
    draggable
    @node-drag-start="nodeDragStart"
    @node-drag-enter="nodeDragEnter"
    @node-drag-over="nodeDragOver"
    @node-drag-leave="nodeDragLeave"
    @node-drag-end="nodeDragEnd"
  ></tiny-toggle-menu>
</template>

<script lang="jsx">
import { ToggleMenu, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyToggleMenu: ToggleMenu
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          label: '更新日志'
        },
        {
          id: 2,
          label: '开发指南',
          children: [
            {
              id: 5,
              label: '引入组件',
              url: '#/webnova/zh-CN/guide/quickstart'
            },
            {
              id: 7,
              label: '国际化',
              url: '#/webnova/zh-CN/guide/i18n'
            },
            {
              id: 8,
              label: '权限',
              url: '#/webnova/zh-CN/guide/permission'
            }
          ]
        },
        {
          id: 3,
          label: '表单组件',
          children: [
            {
              id: 12,
              label: 'Button 按钮',
              url: '#/webnova/zh-CN/component/button'
            },
            {
              id: 13,
              label: 'Input 输入框',
              url: '#/webnova/zh-CN/component/input'
            }
          ]
        },
        {
          id: 4,
          label: '数据组件',
          children: [
            {
              id: 14,
              label: 'Pager 分页',
              url: '#/webnova/zh-CN/component/pager'
            },
            {
              id: 15,
              label: 'Tree 树形控件',
              url: '#/webnova/zh-CN/component/tree'
            }
          ]
        },
        {
          id: 5,
          label: '其他组件',
          children: [
            {
              id: 16,
              label: 'BulletinBoard 公告牌',
              url: '#/webnova/zh-CN/component/bulletin-board'
            },
            {
              id: 17,
              label: 'Tag 标签',
              url: '#/webnova/zh-CN/component/tag'
            }
          ]
        }
      ]
    }
  },
  methods: {
    nodeDragStart() {
      window.tinyLog('拖拽节点后的事件')
    },
    nodeDragEnter() {
      window.tinyLog('拖拽进入某个节点（包含自身节点）时触发的事件')
    },
    nodeDragOver() {
      window.tinyLog('拖拽经过某个节点（包含自身节点）时触发的事件')
    },
    nodeDragLeave() {
      window.tinyLog('拖拽离开某个节点（包含自身节点）时触发的事件')
    },
    nodeDragEnd() {
      window.tinyLog('拖拽结束时触发的事件')
    }
  }
}
</script>
