<template>
  <div class="preview">
    <tiny-nav-menu :data="menuData" overflow="fixed"></tiny-nav-menu>
  </div>
</template>

<script lang="jsx">
import { TinyNavMenu } from '@opentiny/vue'

export default {
  components: {
    TinyNavMenu
  },
  data() {
    return {
      menuData: [
        {
          title: '首页',
          url: '',
          id: '1'
        },
        {
          title: '指南',
          url: '',
          id: '2',
          children: [
            {
              title: '引入组件',
              url: '',
              id: '2-1'
            },
            {
              title: '后端适配器',
              url: '',
              id: '2-2'
            }
          ]
        },
        {
          title: '组件',
          url: '',
          id: '3',
          children: [
            {
              title: '表单组件',
              url: '',
              id: '3-1',
              children: [
                {
                  title: 'Datepicker 日期',
                  url: 'datepicker',
                  id: '3-1-1'
                },
                {
                  title: 'Cascader 级联选择器',
                  url: 'cascader',
                  id: '3-1-2'
                },
                {
                  title: 'DropTimes 下拉时间',
                  url: 'droptimes',
                  id: '3-1-3'
                }
              ]
            },
            {
              title: '数据展示',
              url: '',
              id: '3-2',
              children: [
                {
                  title: 'Card 卡片',
                  url: 'card',
                  id: '3-2-1'
                },
                {
                  title: 'Collapse 折叠面板',
                  url: 'collapse',
                  id: '3-2-2'
                },
                {
                  title: 'Guide 引导',
                  url: 'guide',
                  id: '3-2-3'
                }
              ]
            },
            {
              title: '导航组件',
              url: '',
              id: '3-3',
              children: [
                {
                  title: 'ToggleMenu 收缩菜单',
                  url: 'toggleMenu',
                  id: '3-3-1'
                },
                {
                  title: 'TreeMenu 树型菜单',
                  url: 'treemenu',
                  id: '3-3-2'
                },
                {
                  title: 'Breadcrumb 面包屑',
                  url: 'breadcrumb',
                  id: '3-3-3'
                }
              ]
            },
            {
              title: '业务组件',
              url: '',
              id: '3-4',
              children: [
                {
                  title: 'Amount 金额',
                  url: 'amount',
                  id: '3-4-1'
                },
                {
                  title: 'Area 片区',
                  url: 'area',
                  id: '3-4-2'
                },
                {
                  title: 'Company 公司',
                  url: 'company',
                  id: '3-4-3'
                }
              ]
            }
          ]
        },
        {
          title: '其他',
          url: 'crop',
          id: '4'
        },
        {
          title: '表格',
          url: '',
          id: '5'
        },
        {
          title: '数据展示',
          url: '',
          id: '6'
        },
        {
          title: '反馈',
          url: '',
          id: '7'
        },
        {
          title: '图表',
          url: '',
          id: '8'
        },
        {
          title: '数据展示',
          url: '',
          id: '9'
        },
        {
          title: '业务组件',
          url: '',
          id: '10'
        }
      ]
    }
  }
}
</script>

<style scoped>
.preview {
  min-height: 550px;
}

.preview .tiny-nav-menu a:hover {
  text-decoration: none;
}
</style>
