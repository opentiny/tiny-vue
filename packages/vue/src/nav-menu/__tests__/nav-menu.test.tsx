import { IconTotal } from '@opentiny/vue-icon'
import NavMenu from '@opentiny/vue-nav-menu'
import { describe, expect, test } from 'vitest'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

describe('PC Mode', () => {
  const mount = mountPcMode

  const navMenuMockData = [
    {
      title: '首页',
      url: ''
    },
    {
      title: '指南',
      url: '',
      children: [
        {
          title: '引入组件',
          url: '',
          children: [
            {
              title: '按需引入',
              url: ''
            },
            {
              title: '完整引入',
              url: ''
            }
          ]
        },
        {
          title: '后端适配器',
          url: '',
          children: [
            {
              title: 'Gateway 适配器',
              url: ''
            },
            {
              title: 'Jalor 适配器',
              url: ''
            },
            {
              title: 'Standalone 适配器',
              url: ''
            }
          ]
        },
        {
          title: '服务代理',
          url: '',
          children: [
            {
              title: '本地代理',
              url: ''
            },
            {
              title: '远程代理',
              url: ''
            }
          ]
        },
        {
          title: '构建部署',
          url: '',
          children: [
            {
              title: '本地构建',
              url: ''
            },
            {
              title: '查看构建报告',
              url: ''
            },
            {
              title: '静态资源构建',
              url: ''
            },
            {
              title: '多环境部署',
              url: ''
            },
            {
              title: '静态资源部署',
              url: ''
            },
            {
              title: 'CI 部署',
              url: ''
            },
            {
              title: '引入静态资源',
              url: ''
            }
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
            {
              title: 'Button 按钮',
              url: 'button'
            },
            {
              title: 'Datepicker 日期',
              url: 'datepicker'
            },
            {
              title: 'Dropdown 下拉框',
              url: 'dropdown'
            },
            {
              title: 'DropTimes 下拉时间',
              url: 'droptimes'
            },
            {
              title: 'Input 输入框',
              url: 'input'
            },
            {
              title: 'Textarea 文本域',
              url: 'textarea'
            }
          ]
        },
        {
          title: '数据组件',
          url: '',
          children: [
            {
              title: 'Chart 图表',
              url: 'chart'
            },
            {
              title: 'Grid 数据表格',
              url: 'grid'
            },
            {
              title: 'Pager 分页',
              url: 'pager'
            },
            {
              title: 'Tree 树形控件',
              url: 'tree'
            }
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
            {
              title: 'Amount 金额',
              url: 'amount'
            },
            {
              title: 'Area 片区',
              url: 'area'
            },
            {
              title: 'Company 公司',
              url: 'company'
            },
            {
              title: 'Dept 部门',
              url: 'dept'
            },
            {
              title: 'eDoc 企业文档',
              url: 'Edoc'
            },
            {
              title: 'User 用户',
              url: 'user'
            }
          ]
        }
      ]
    }
  ]

  const IconTotalComponent = IconTotal()

  /**
   * attrs
   */
  test('render & data', async () => {
    const wrapper = mount(() => <NavMenu data={navMenuMockData}></NavMenu>)
    const navMenu = wrapper.findComponent({ name: 'TinyNavMenu' })
    expect(navMenu).toBeTruthy()
    expect(navMenu.vm.state.data.length).toBe(3)
  })

  test.todo('overflow 设置一级菜单无法在当前菜单容器里显示完全时的处理策略。可选项有 auto / retract / fixed / hidden。默认为 auto')

  test.todo('before-skip 点击菜单跳转前的钩子函数，返回 false 将无法跳转')

  test.todo('fetch-menu-data 自定义菜单数据加载服务，返回一个Promise对象')

  test.todo('fields 自定义菜单数据的映射')

  /**
   * slots
   */
  test('logo slot', async () => {
    const wrapper = mount(() =>
        <NavMenu data={navMenuMockData}>
            {{
                logo: () => <IconTotalComponent></IconTotalComponent>
            }}
        </NavMenu>
    )
    const iconTotalSvg = wrapper.find('.slot-logo')
    expect(iconTotalSvg.exists()).toBeTruthy()
  })
})
