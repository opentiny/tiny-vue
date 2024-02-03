<template>
  <tiny-tree-menu :data="treeData" :props="mapField"></tiny-tree-menu>
</template>

<script>
import { TreeMenu, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  data() {
    return {
      mapField: {
        label: 'name',
        children: 'zones'
      },
      treeData: [
        {
          id: 100,
          name: '首页'
        },
        {
          id: 200,
          name: '指南',

          zones: [
            {
              id: 201,
              name: '引入组件',
              zones: [
                { id: 20101, name: '按需引入' },
                { id: 20102, name: '完整引入' }
              ]
            },
            { id: 202, name: '后端适配器' },
            { id: 203, name: '服务代理' },
            { id: 204, name: '构建部署' }
          ]
        },
        {
          id: 300,
          name: '组件',

          zones: [
            {
              id: 300,
              name: '组件'
            },
            {
              id: 301,
              name: '表单组件',
              zones: [
                {
                  id: 30101,
                  name: 'Button 按钮',
                  url: 'button'
                },
                { id: 30102, name: 'Datepicker 日期', url: '' },
                { id: 30103, name: 'Dropdown 下拉框', url: '' },
                { id: 30104, name: 'DropTimes 下拉时间', url: '' },
                { id: 30105, name: 'Input 输入框', url: '' }
              ]
            },
            { id: 302, name: '数据组件' },
            { id: 303, name: '导航组件' },
            { id: 304, name: '业务组件' }
          ]
        },
        {
          id: 400,
          name: '教程',
          zones: [
            {
              id: 401,
              name: '页面布局',
              zones: [
                { id: 40101, name: '添加标签页', url: '' },
                { id: 40102, name: '标签页配置', url: '' }
              ]
            },
            {
              id: 402,
              name: '查询功能',
              zones: [
                { id: 40201, name: '添加查询页面', url: '' },
                { id: 40202, name: '列表属性配置', url: '' },
                { id: 40203, name: '通讯录查询', url: '' }
              ]
            },
            {
              id: 403,
              name: '新增功能',
              zones: [
                { id: 40301, name: '表单新增功能', url: '' },
                { id: 40302, name: '表单数据验证', url: '' }
              ]
            },
            {
              id: 404,
              name: '编辑功能',
              zones: [
                { id: 40401, name: '开启编辑功能', url: '' },
                { id: 40402, name: '保存表格数据', url: '' }
              ]
            }
          ]
        },
        {
          id: 500,
          name: '规范'
        },
        {
          id: 600,
          name: '性能'
        },
        {
          id: 700,
          name: '案例'
        },
        {
          id: 800,
          name: '更新日志'
        }
      ]
    }
  }
}
</script>
