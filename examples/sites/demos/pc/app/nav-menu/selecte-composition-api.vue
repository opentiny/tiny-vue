<template>
  <div class="preview">
    <tiny-nav-menu :data="menuData" :defaultActive="defaultActive"></tiny-nav-menu>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNavMenu } from '@opentiny/vue'

const defaultActive = ref('2-1-1')

const menuData = ref([
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
        id: '2-1',
        children: [
          {
            title: '按需引入',
            url: '',
            id: '2-1-1'
          },
          {
            title: '完整引入',
            url: '',
            id: '2-1-2'
          }
        ]
      },
      {
        title: '后端适配器',
        url: '',
        id: '2-2',
        children: [
          {
            title: 'Gateway 适配器',
            url: '',
            id: '2-2-1'
          },
          {
            title: 'Jalor 适配器',
            url: '',
            id: '2-2-2'
          },
          {
            title: 'Standalone 适配器',
            url: '',
            id: '2-2-3'
          }
        ]
      },
      {
        title: '服务代理',
        url: '',
        id: '2-3',
        children: [
          {
            title: '本地代理',
            url: '',
            id: '2-3-1'
          },
          {
            title: '远程代理',
            url: '',
            id: '2-3-2'
          }
        ]
      },
      {
        title: '构建部署',
        url: '',
        id: '2-4',
        children: [
          {
            title: '本地构建',
            url: '',
            id: '2-4-1'
          },
          {
            title: '查看构建报告',
            url: '',
            id: '2-4-2'
          },
          {
            title: '静态资源构建',
            url: '',
            id: '2-4-4'
          },
          {
            title: '多环境部署',
            url: '',
            id: '2-4-5'
          },
          {
            title: '静态资源部署',
            url: '',
            id: '2-4-6'
          },
          {
            title: 'CI 部署',
            url: '',
            id: '2-4-7'
          },
          {
            title: '引入静态资源',
            url: '',
            id: '2-4-8'
          }
        ]
      }
    ]
  },
  {
    title: '组件',
    url: '',
    id: '3'
  },
  {
    title: '教程',
    url: '',
    id: '4',
    children: [
      {
        title: '页面布局',
        url: '',
        id: '4-1',
        children: [
          {
            title: '添加标签页',
            url: '#/zh-CN/tutorial/addtabs',
            id: '4-1-1'
          },
          {
            title: '标签页配置',
            url: '#/zh-CN/tutorial/tabsattr',
            id: '4-1-2'
          }
        ]
      },
      {
        title: '查询功能',
        url: '',
        id: '4-2',
        children: [
          {
            title: '添加查询页面',
            url: '#/zh-CN/tutorial/addlist',
            id: '4-2-1'
          },
          {
            title: '列表属性配置',
            url: '#/zh-CN/tutorial/listattr',
            id: '4-2-2'
          },
          {
            title: '通讯录查询',
            url: '#/zh-CN/tutorial/searchfunc',
            id: '4-2-3'
          }
        ]
      },
      {
        title: '新增功能',
        url: '',
        id: '4-3',
        children: [
          {
            title: '表单新增功能',
            url: '#/zh-CN/tutorial/addservice',
            id: '4-3-1'
          },
          {
            title: '表单数据验证',
            url: '#/zh-CN/tutorial/valid',
            id: '4-3-2'
          }
        ]
      },
      {
        title: '编辑功能',
        url: '',
        id: '4-4',
        children: [
          {
            title: '开启编辑功能',
            url: '#/zh-CN/tutorial/editattr',
            id: '4-4-1'
          },
          {
            title: '保存表格数据',
            url: '#/zh-CN/tutorial/savefunc',
            id: '4-4-2'
          }
        ]
      }
    ]
  },
  {
    title: '规范',
    url: '#/zh-CN/regular/rulelevel',
    id: '5'
  },
  {
    title: '性能',
    url: '#/zh-CN/speed',
    id: '6'
  },
  {
    title: '案例',
    url: '#/zh-CN/example',
    id: '7'
  },
  {
    title: '更新日志',
    url: '#/zh-CN/guide/changelog',
    id: '8'
  },
  {
    title: '测试',
    url: '#/zh-CN/guide/aaa',
    id: '9'
  },
  {
    title: '资源',
    url: '10'
  },
  {
    title: 'SDK',
    url: '',
    id: '11',
    children: [
      {
        title: '表单组件',
        url: '',
        id: '3-1',
        children: [
          {
            title: 'Button 按钮',
            url: '',
            id: '3-1-1'
          },
          {
            title: 'Datepicker 日期',
            url: 'datepicker',
            id: '3-1-2'
          },
          {
            title: 'Dropdown 下拉框',
            url: 'dropdown',
            id: '3-1-3'
          },
          {
            title: 'DropTimes 下拉时间',
            url: 'droptimes',
            id: '3-1-4'
          },
          {
            title: 'Input 输入框',
            url: 'input',
            id: '3-1-5'
          },
          {
            title: 'Textarea 文本域',
            url: 'textarea',
            id: '3-1-6'
          }
        ]
      },
      {
        title: '数据组件',
        url: '',
        id: '3-2',
        children: [
          {
            title: 'Chart 图表',
            url: 'chart',
            id: '3-2-1'
          },
          {
            title: 'Grid 数据表格',
            url: 'grid',
            id: '3-2-2'
          },
          {
            title: 'Pager 分页',
            url: 'pager',
            id: '3-2-3'
          },
          {
            title: 'Tree 树形控件',
            url: 'tree',
            id: '3-2-4'
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
          },
          {
            title: 'Dept 部门',
            url: 'dept',
            id: '3-4-4'
          },
          {
            title: 'eDoc 企业文档',
            url: 'Edoc',
            id: '3-4-5'
          },
          {
            title: 'User 用户',
            url: 'user',
            id: '3-4-6'
          }
        ]
      }
    ]
  },
  {
    title: 'TINY 学院',
    url: '',
    id: '12'
  }
])
</script>

<style scoped>
.preview {
  min-height: 450px;
}

.preview .tiny-nav-menu a:hover {
  text-decoration: none;
}
</style>
