<template>
  <tiny-link-menu :data="datas" :max-item="5" :default-expand-all="false"></tiny-link-menu>
</template>

<script lang="jsx">
import { LinkMenu } from '@opentiny/vue'

export default {
  components: {
    TinyLinkMenu: LinkMenu
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
              id: 3,
              label: '引入组件',
              url: '#/webnova/zh-CN/guide/quickstart'
            },
            {
              id: 4,
              label: '国际化',
              url: '#/webnova/zh-CN/guide/i18n'
            },
            {
              id: 5,
              label: '权限',
              url: '#/webnova/zh-CN/guide/permission'
            }
          ]
        },
        {
          id: 6,
          label: '表单组件',
          children: [
            {
              id: 7,
              label: 'Button 按钮',
              url: '#/webnova/zh-CN/component/button'
            },
            {
              id: 8,
              label: 'Input 输入框',
              url: '#/webnova/zh-CN/component/input'
            }
          ]
        },
        {
          id: 9,
          label: '数据组件',
          children: [
            {
              id: 10,
              label: 'Pager 分页',
              url: '#/webnova/zh-CN/component/pager'
            },
            {
              id: 11,
              label: 'Tree 树形控件',
              url: '#/webnova/zh-CN/component/tree'
            }
          ]
        },
        {
          id: 12,
          label: '其他组件',
          children: [
            {
              id: 13,
              label: 'BulletinBoard 公告牌',
              url: '#/webnova/zh-CN/component/bulletin-board'
            },
            {
              id: 14,
              label: 'Tag 标签',
              url: '#/webnova/zh-CN/component/tag'
            }
          ]
        }
      ]
    }
  }
}
</script>
