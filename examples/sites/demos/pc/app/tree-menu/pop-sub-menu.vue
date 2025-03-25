<template>
  <div class="wrapper">
    <div class="menu-fix">
      <h4>浅色模式</h4>
      <tiny-tree-menu :data="treeData" show-expand expand-menu-popable :show-filter="false"></tiny-tree-menu>
    </div>

    <div class="menu-fix">
      <h4>深色模式</h4>
      <tiny-tree-menu
        class="my-dark-menu"
        :show-filter="false"
        :data="treeData"
        show-expand
        expand-menu-popable
        popperClass="my-dark-menu"
      ></tiny-tree-menu>
    </div>
  </div>
</template>

<script>
import { TinyTreeMenu } from '@opentiny/vue'
import { iconApp, iconExpressSearch, iconTotal, iconUnfreeze, iconFile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTreeMenu
  },
  data() {
    return {
      treeData: [
        {
          id: 100,
          label: '首页',
          customIcon: iconApp()
        },
        {
          id: 200,
          label: '指南',
          customIcon: iconExpressSearch(),
          children: [
            {
              id: 201,
              label: '引入组件',
              children: [
                { id: 20101, label: '按需引入' },
                { id: 20102, label: '完整引入', customIcon: iconApp() }
              ]
            },
            { id: 202, label: '后端适配器' },
            { id: 203, label: '服务代理' },
            { id: 204, label: '构建部署' }
          ]
        },
        {
          id: 300,
          label: '组件',
          customIcon: iconTotal(),
          children: [
            {
              id: 300,
              label: '组件'
            },
            {
              id: 301,
              label: '表单组件',
              children: [
                {
                  id: 30101,
                  label: 'Button 按钮',
                  url: 'button'
                },
                { id: 30102, label: 'Datepicker 日期', url: '' },
                { id: 30103, label: 'Dropdown 下拉框', url: '' },
                { id: 30104, label: 'DropTimes 下拉时间', url: '' },
                { id: 30105, label: 'Input 输入框', url: '' }
              ]
            },
            { id: 302, label: '数据组件' },
            { id: 303, label: '导航组件' },
            { id: 304, label: '业务组件' }
          ]
        },
        {
          id: 400,
          label: '教程',
          customIcon: iconUnfreeze(),
          children: [
            {
              id: 401,
              label: '页面布局',
              children: [
                { id: 40101, label: '添加标签页', url: '' },
                { id: 40102, label: '标签页配置', url: '' }
              ]
            },
            {
              id: 402,
              label: '查询功能',
              children: [
                { id: 40201, label: '添加查询页面', url: '' },
                { id: 40202, label: '列表属性配置', url: '' },
                { id: 40203, label: '通讯录查询', url: '' }
              ]
            },
            {
              id: 403,
              label: '新增功能',
              children: [
                { id: 40301, label: '表单新增功能', url: '' },
                { id: 40302, label: '表单数据验证', url: '' }
              ]
            },
            {
              id: 404,
              label: '编辑功能',
              children: [
                { id: 40401, label: '开启编辑功能', url: '' },
                { id: 40402, label: '保存表格数据', url: '' }
              ]
            }
          ]
        },
        {
          id: 500,
          label: '规范',
          customIcon: iconFile()
        },
        {
          id: 600,
          label: '性能',
          customIcon: iconFile()
        },
        {
          id: 700,
          label: '案例',
          customIcon: iconFile()
        },
        {
          id: 800,
          label: '更新日志',
          customIcon: iconFile()
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  display: flex;
  justify-content: space-between;
}

.menu-fix {
  margin-right: 300px;
}
</style>

<style lang="less">
.my-dark-menu {
  --tv-TreeMenu-background-color: #284570 !important;
  --tv-TreeMenu-node-body-text-color: rgba(255, 255, 255, 0.85) !important;
  --tv-TreeMenu-node-hover-bg-color: transparent !important;
  --tv-TreeMenu-node-selected-bg-color: #2e71e6 !important;
  --tv-TreeMenu-collapse-icon-fill-color: rgba(255, 255, 255, 0.85) !important;
  --tv-TreeMenu-collapse-icon-hover-color: #ffffff !important;
  --tv-TreeMenu-pop-item-active-text-color: #ffffff !important;
  --tv-TreeMenu-pop-item-selected-bg: #2e71e6 !important;
  --tv-TreeMenu-pop-item-selected-text-color: #ffffff !important;
  --tv-Tree-bg-color: #284570 !important;
  --tv-Popover-bg-color: #284570 !important;

  .tiny-tree {
    --tv-Tree-bg-color: #284570;
  }

  .tiny-tree-menu__expand {
    background-color: var(--tv-Tree-bg-color);
  }
}
</style>
