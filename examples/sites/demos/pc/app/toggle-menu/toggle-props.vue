<template>
  <tiny-toggle-menu :data="datas" :props="{ label: 'text' }"></tiny-toggle-menu>
</template>

<script lang="jsx">
import { ToggleMenu } from '@opentiny/vue'

export default {
  components: {
    TinyToggleMenu: ToggleMenu
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          text: '更新日志'
        },
        {
          id: 2,
          text: '开发指南',
          children: [
            {
              id: 5,
              text: '引入组件',
              disabled: true,
              url: '#/webnova/zh-CN/guide/quickstart'
            },
            {
              id: 7,
              text: '国际化',
              url: '#/webnova/zh-CN/guide/i18n'
            },
            {
              id: 8,
              text: '权限',
              url: '#/webnova/zh-CN/guide/permission'
            }
          ]
        },
        {
          id: 3,
          text: '表单组件',
          children: [
            {
              id: 12,
              text: 'Button 按钮',
              url: '#/webnova/zh-CN/component/button'
            },
            {
              id: 13,
              text: 'Input 输入框',
              url: '#/webnova/zh-CN/component/input'
            }
          ]
        },
        {
          id: 4,
          text: '数据组件',
          children: [
            {
              id: 14,
              text: 'Pager 分页',
              url: '#/webnova/zh-CN/component/pager'
            },
            {
              id: 15,
              text: 'Tree 树形控件',
              url: '#/webnova/zh-CN/component/tree'
            }
          ]
        },
        {
          id: 5,
          text: '其他组件',
          children: [
            {
              id: 16,
              text: 'BulletinBoard 公告牌',
              url: '#/webnova/zh-CN/component/bulletin-board'
            },
            {
              id: 17,
              text: 'Tag 标签',
              url: '#/webnova/zh-CN/component/tag'
            }
          ]
        }
      ]
    }
  }
}
</script>
