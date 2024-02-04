<template>
  <div class="preview">
    <tiny-nav-menu :data="menuData" parent-key="pid"></tiny-nav-menu>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { NavMenu as TinyNavMenu } from '@opentiny/vue'

const menuData = ref([
  { id: 1, pid: 0, title: '首页', url: '' },
  { id: 2, pid: 0, title: '指南', url: '' },
  { id: 3, pid: 0, title: '组件', url: '' },
  { id: 4, pid: 0, title: '教程', url: '' },
  { id: 5, pid: 0, title: '规范', url: '#/zh-CN/regular/rulelevel' },
  { id: 6, pid: 0, title: '性能', url: '#/zh-CN/speed' },
  { id: 7, pid: 0, title: '案例', url: '#/zh-CN/example' },
  { id: 8, pid: 0, title: '更新日志', url: '#/zh-CN/guide/changelog' },
  { id: 9, pid: 0, title: '测试', url: '#/zh-CN/guide/aaa' },
  { id: 10, pid: 0, title: '资源', url: '' },
  { id: 11, pid: 0, title: 'SDK', url: '' },
  { id: 12, pid: 0, title: 'TINY 学院', url: '' },
  { id: 13, pid: 2, title: '引入组件', url: '' },
  { id: 14, pid: 2, title: '后端适配器', url: '' },
  { id: 15, pid: 2, title: '服务代理', url: '' },
  { id: 16, pid: 2, title: '构建部署', url: '' },
  { id: 17, pid: 3, title: '表单组件', url: '' },
  { id: 18, pid: 3, title: '数据组件', url: '' },
  { id: 19, pid: 3, title: '导航组件', url: '' },
  { id: 20, pid: 3, title: '业务组件', url: '' },
  { id: 21, pid: 4, title: '页面布局', url: '' },
  { id: 22, pid: 4, title: '查询功能', url: '' },
  { id: 23, pid: 4, title: '新增功能', url: '' },
  { id: 24, pid: 4, title: '编辑功能', url: '' },
  { id: 25, pid: 13, title: '按需引入', url: '' },
  { id: 26, pid: 13, title: '完整引入', url: '' },
  { id: 27, pid: 14, title: 'Gateway 适配器', url: '' },
  { id: 28, pid: 14, title: 'Jalor 适配器', url: '' },
  { id: 29, pid: 14, title: 'Standalone 适配器', url: '' },
  { id: 30, pid: 15, title: '本地代理', url: '' },
  { id: 31, pid: 15, title: '远程代理', url: '' },
  { id: 32, pid: 16, title: '本地构建', url: '' },
  { id: 33, pid: 16, title: '查看构建报告', url: '' },
  { id: 34, pid: 16, title: '静态资源构建', url: '' },
  { id: 35, pid: 16, title: '多环境部署', url: '' },
  { id: 36, pid: 16, title: '静态资源部署', url: '' },
  { id: 37, pid: 16, title: 'CI 部署', url: '' },
  { id: 38, pid: 16, title: '引入静态资源', url: '' },
  { id: 39, pid: 17, title: 'Button 按钮', url: '#/zh-CN/component/button' },
  { id: 40, pid: 17, title: 'Datepicker 日期', url: '#/zh-CN/component/datepicker' },
  { id: 41, pid: 17, title: 'Dropdown 下拉框', url: '#/zh-CN/component/dropdown' },
  { id: 42, pid: 17, title: 'DropTimes 下拉时间', url: '#/zh-CN/component/droptimes' },
  { id: 43, pid: 17, title: 'Input 输入框', url: '#/zh-CN/component/input' },
  { id: 44, pid: 17, title: 'Textarea 文本域', url: '#/zh-CN/component/textarea' },
  { id: 45, pid: 18, title: 'Chart 图表', url: '#/zh-CN/component/chart' },
  { id: 46, pid: 18, title: 'Grid 数据表格', url: '#/zh-CN/component/grid' },
  { id: 47, pid: 18, title: 'Pager 分页', url: '#/zh-CN/component/pager' },
  { id: 48, pid: 18, title: 'Tree 树形控件', url: '#/zh-CN/component/tree' },
  { id: 49, pid: 19, title: 'ToggleMenu 收缩菜单', url: '#/zh-CN/component/toggleMenu' },
  { id: 50, pid: 19, title: 'TreeMenu 树型菜单', url: '#/zh-CN/component/treemenu' },
  { id: 51, pid: 20, title: 'Amount 金额', url: '#/zh-CN/component/amount' },
  { id: 52, pid: 20, title: 'Area 片区', url: '#/zh-CN/component/area' },
  { id: 53, pid: 20, title: 'Company 公司', url: '#/zh-CN/component/company' },
  { id: 54, pid: 20, title: 'Dept 部门', url: '#/zh-CN/component/dept' },
  { id: 55, pid: 20, title: 'eDoc 企业文档', url: '#/zh-CN/component/Edoc' },
  { id: 56, pid: 20, title: 'User 用户', url: '#/zh-CN/component/user' },
  { id: 57, pid: 21, title: '添加标签页', url: '#/zh-CN/tutorial/addtabs' },
  { id: 58, pid: 21, title: '标签页配置', url: '#/zh-CN/tutorial/tabsattr' },
  { id: 59, pid: 22, title: '添加查询页面', url: '#/zh-CN/tutorial/addlist' },
  { id: 60, pid: 22, title: '列表属性配置', url: '#/zh-CN/tutorial/listattr' },
  { id: 61, pid: 22, title: '通讯录查询', url: '#/zh-CN/tutorial/searchfunc' },
  { id: 62, pid: 23, title: '表单新增功能', url: '#/zh-CN/tutorial/addservice' },
  { id: 63, pid: 23, title: '表单数据验证', url: '#/zh-CN/tutorial/valid' },
  { id: 64, pid: 24, title: '开启编辑功能', url: '#/zh-CN/tutorial/editattr' },
  { id: 65, pid: 24, title: '保存表格数据', url: '#/zh-CN/tutorial/savefunc' }
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
