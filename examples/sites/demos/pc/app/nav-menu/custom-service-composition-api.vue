<template>
  <div class="preview">
    <tiny-nav-menu :fetch-menu-data="getMenuData" :fields="fields"></tiny-nav-menu>
  </div>
</template>

<script setup>
import { TinyNavMenu } from '@opentiny/vue'

const fields = {
  textField: 'label',
  urlField: 'urlField'
}

function getMenuData() {
  let menuData = [
    {
      label: '首页',
      urlField: '',
      id: '1'
    },
    {
      label: '指南',
      urlField: '',
      id: '2',
      children: [
        {
          label: '引入组件',
          urlField: '',
          id: '2-1'
        },
        {
          label: '后端适配器',
          urlField: '',
          id: '2-2'
        }
      ]
    },
    {
      label: '组件',
      urlField: '',
      id: '3',
      children: [
        {
          label: '表单组件',
          urlField: '',
          id: '3-1',
          children: [
            {
              label: 'Datepicker 日期',
              urlField: 'datepicker',
              id: '3-1-1'
            },
            {
              label: 'Cascader 级联选择器',
              urlField: 'cascader',
              id: '3-1-2'
            },
            {
              label: 'DropTimes 下拉时间',
              urlField: 'droptimes',
              id: '3-1-3'
            }
          ]
        },
        {
          label: '数据展示',
          urlField: '',
          id: '3-2',
          children: [
            {
              label: 'Card 卡片',
              urlField: 'card',
              id: '3-2-1'
            },
            {
              label: 'Collapse 折叠面板',
              urlField: 'collapse',
              id: '3-2-2'
            },
            {
              label: 'Guide 引导',
              urlField: 'guide',
              id: '3-2-3'
            }
          ]
        },
        {
          label: '导航组件',
          urlField: '',
          id: '3-3',
          children: [
            {
              label: 'ToggleMenu 收缩菜单',
              urlField: 'toggleMenu',
              id: '3-3-1'
            },
            {
              label: 'TreeMenu 树型菜单',
              urlField: 'treemenu',
              id: '3-3-2'
            },
            {
              label: 'Breadcrumb 面包屑',
              urlField: 'breadcrumb',
              id: '3-3-3'
            }
          ]
        },
        {
          label: '业务组件',
          urlField: '',
          id: '3-4',
          children: [
            {
              label: 'Amount 金额',
              urlField: 'amount',
              id: '3-4-1'
            },
            {
              label: 'Area 片区',
              urlField: 'area',
              id: '3-4-2'
            },
            {
              label: 'Company 公司',
              urlField: 'company',
              id: '3-4-3'
            }
          ]
        }
      ]
    },
    {
      label: '其他',
      urlField: 'crop',
      id: '4'
    }
  ]

  return Promise.resolve(menuData)
}
</script>

<style scoped>
.preview {
  min-height: 450px;
}

.preview .tiny-nav-menu a:hover {
  text-decoration: none;
}
</style>
