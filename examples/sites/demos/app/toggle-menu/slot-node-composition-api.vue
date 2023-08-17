<template>
  <tiny-toggle-menu :data="datas" :show-filter="false" placeholder="输入框的占位符" wrap>
    <template #node="{ data }">
      <div>{{ data.label + data.id }}</div>
    </template>
  </tiny-toggle-menu>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ToggleMenu as TinyToggleMenu } from '@opentiny/vue'

const datas = ref([
  {
    id: 1,
    label: '更新日志'
  },
  {
    id: 2,
    label: '菜单内容超长是否换行显示，默认为不换行',
    children: [
      {
        id: 6,
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
])
</script>
