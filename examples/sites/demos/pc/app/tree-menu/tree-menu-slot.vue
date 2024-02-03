<template>
  <tiny-tree-menu :data="treeData" class="tree-menu-demo">
    <template #default="slotScope">
      <a :target="slotScope.data.target" :class="slotScope.data.class">
        {{ slotScope.data.label }}
      </a>
      <component v-if="slotScope.data.icon" :is="slotScope.data.icon" class="custom-icon"></component>
    </template>
  </tiny-tree-menu>
</template>

<script>
import { TreeMenu } from '@opentiny/vue'
import { iconApp, iconCustom, iconText, iconTotal } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  data() {
    return {
      treeData: [
        {
          id: 100,
          label: '首页',
          class: 'treeClass',
          target: '_blank',
          icon: iconApp()
        },
        {
          id: 200,
          label: '指南',
          class: 'treeNodeClass',
          target: '_self',
          icon: iconCustom(),
          children: [
            {
              id: 201,
              label: '引入组件'
            },
            { id: 202, label: '后端适配器' },
            { id: 203, label: '服务代理' },
            { id: 204, label: '构建部署' }
          ]
        },
        {
          id: '300',
          label: '组件',
          icon: iconTotal(),
          children: [
            {
              id: 301,
              label: '表单组件'
            },
            { id: 302, label: '数据组件' },
            { id: 303, label: '导航组件' },
            { id: 304, label: '业务组件' }
          ]
        },
        {
          id: 'book',
          label: '教程',
          icon: iconText(),
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
          label: '规范'
        },
        {
          id: 600,
          label: '性能'
        },
        {
          id: 700,
          label: '案例'
        },
        {
          id: 800,
          label: '更新日志'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tree-menu-demo a,
.tree-menu-demo a:hover {
  color: #333;
  text-decoration: none;
}
.custom-icon {
  margin-left: 8px;
}
</style>
