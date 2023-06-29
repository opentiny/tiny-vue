import FallMenu from '@opentiny/vue-fall-menu'
import { describe, expect, test } from 'vitest'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

describe('PC Mode', () => {
  const mount = mountPcMode

  const fallMenuMockData = [
    { title: '首页', url: '#/zh-CN/index' },
    {
      title: '指南',
      url: '',
      children: [
        {
          title: '引入组件',
          url: '',
          children: [
            { title: '按需引入', url: '' },
            { title: '完整引入', url: '' }
          ]
        },
        {
          title: '后端适配器',
          url: '',
          children: [
            { title: 'Gateway 适配器', url: '' },
            { title: 'Jalor 适配器', url: '' },
            { title: 'Standalone 适配器', url: '' }
          ]
        },
        {
          title: '服务代理',
          url: '',
          children: [
            { title: '本地代理', url: '' },
            { title: '远程代理', url: '' }
          ]
        },
        {
          title: '构建部署',
          url: '',
          children: [
            { title: '本地构建', url: '' },
            { title: '查看构建报告', url: '' },
            { title: '静态资源 WCM 的构建', url: '' },
            { title: '多环境 WCM 的部署', url: '' },
            { title: '静态资源 WCM 的部署', url: '' },
            { title: 'CI 部署配置', url: '' },
            { title: '引入静态资源', url: '' }
          ]
        }
      ]
    },
    {
      title: '组件',
      url: '',
      children: [
        {
          title: '表单组件',
          url: '',
          children: [
            { title: 'Button 按钮', url: 'button' },
            {
              title: 'Datepicker 日期',
              url: 'datepicker'
            },
            { title: 'Dropdown 下拉框', url: 'dropdown' },
            {
              title: 'DropTimes 下拉时间',
              url: 'droptimes'
            },
            { title: 'Input 输入框', url: 'input' },
            { title: 'Textarea 文本域', url: 'textarea' }
          ]
        },
        {
          title: '数据组件',
          url: '',
          children: [
            { title: 'Chart 图表', url: 'chart' },
            { title: 'Grid 数据表格', url: 'grid' },
            { title: 'Pager 分页', url: 'pager' },
            { title: 'Tree 树形控件', url: 'tree' }
          ]
        },
        {
          title: '导航组件',
          url: '',
          children: [
            {
              title: 'ToggleMenu 收缩菜单',
              url: 'toggleMenu'
            },
            {
              title: 'TreeMenu 树型菜单',
              url: 'treemenu'
            }
          ]
        },
        {
          title: '业务组件',
          url: '',
          children: [
            { title: 'Amount 金额', url: 'amount' },
            { title: 'Area 片区', url: 'area' },
            { title: 'Company 公司', url: 'company' },
            { title: 'Dept 部门', url: 'dept' },
            { title: 'eDoc 企业文档', url: 'Edoc' },
            { title: 'User 用户', url: 'user' }
          ]
        }
      ]
    },
    {
      title: '教程',
      url: '',
      children: [
        {
          title: '页面布局',
          url: '',
          children: [
            { title: '添加标签页', url: '#/zh-CN/tutorial/addtabs' },
            { title: '标签页配置', url: '#/zh-CN/tutorial/tabsattr' }
          ]
        },
        {
          title: '查询功能',
          url: '',
          children: [
            { title: '添加查询页面', url: '#/zh-CN/tutorial/addlist' },
            { title: '列表属性配置', url: '#/zh-CN/tutorial/listattr' },
            { title: '通讯录查询', url: '#/zh-CN/tutorial/searchfunc' }
          ]
        },
        {
          title: '新增功能',
          url: '',
          children: [
            { title: '表单新增功能', url: '#/zh-CN/tutorial/addservice' },
            { title: '表单数据验证', url: '#/zh-CN/tutorial/valid' }
          ]
        },
        {
          title: '编辑功能',
          url: '',
          children: [
            { title: '开启编辑功能', url: '#/zh-CN/tutorial/editattr' },
            { title: '保存表格数据', url: '#/zh-CN/tutorial/savefunc' }
          ]
        }
      ]
    },
    { title: '规范', url: '#/zh-CN/regular/rulelevel' },
    { title: '性能', url: '#/zh-CN/speed' },
    { title: '案例', url: '#/zh-CN/example' },
    { title: '更新日志', url: '#/zh-CN/guide/changelog' },
    { title: '测试', url: '' },
    { title: '帮助', url: '' },
    { title: '支持', url: '' },
    { title: '示例', url: '' },
    { title: '工具', url: '' },
    { title: '资源列表', url: '' }
  ]
  
  /**
   * attrs
   */
  test('data', async () => {
    const wrapper = mount(() => (
        <FallMenu data={fallMenuMockData}></FallMenu>
    ))
    const items = wrapper.findAll('.tiny-fall-menu__list ul > li')
    expect(items.length).toBe(14)
  })

  /**
   * slots
   */
  test('level1 slot', async () => {
    const wrapper = mount(() => (
        <FallMenu data={fallMenuMockData}>
            {{
                level1: ({slotScope}) => (
                    <a>{slotScope.title + '-level-1'}</a>
                )
            }}
        </FallMenu>
    ))
    const item = wrapper.find('.tiny-fall-menu__list ul > li a')
    expect(item.text()).contain('-level-1')
  })

  test.todo('level2 自定义二级菜单')

  test.todo('level3 自定义三级菜单')

  test.todo('left 自定义左侧切换图标')

  test.todo('right 自定义右侧切换图标')
})
