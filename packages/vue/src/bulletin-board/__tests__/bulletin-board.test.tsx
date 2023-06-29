import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import BulletinBoard from '@opentiny/vue-bulletin-board'

describe('PC Mode', () => {
  const mount = mountPcMode
  
  const tabTitle = ['TINY 更新日志', '他们都在用', 'TINY 特性']
  const data = [
    [
      {
        text: 'TINY v2.1.4 版本',
        date: '2019-07-31',
        url: 'localhost:3000/#/webcore/zh-CN/guide/changelog',
        target: '_blank'
      },
      {
        text: 'TINY v2.1.3 版本',
        date: '2019-06-11',
        url: 'localhost:3000/#/webcore/zh-CN/guide/changelog',
        target: '_blank'
      },
      {
        text: 'TINY v2.1.2 版本',
        date: '2019-05-11',
        url: 'localhost:3000/#/webcore/zh-CN/guide/changelog',
        target: '_blank'
      }
    ],
    [
      {
        text: 'SRM 采购云',
        date: '2018-09-11',
        url: 'http://abcdf.com',
        target: '_blank'
      },
      {
        text: 'iSales',
        url: 'http://abcdf.com',
        date: '2018-09-11',
        route: 'Alert'
      },
      {
        text: '数易平台',
        url: 'http://abcdf.com',
        date: '2018-09-11'
      },
      {
        text: 'MES+ 制造平台',
        date: '2018-09-11',
        url: 'http://abcdf.com',
        target: '_blank'
      },
      {
        text: 'ISDP',
        date: '2018-09-11',
        url: 'http://abcdf.com',
        route: 'Alert'
      },
      {
        text: '财经智慧助手',
        url: 'http://abcdf.com',
        date: '2018-09-11'
      }
    ],
    [
      {
        text: '秒级系统体验，按需打包；一致 UX 体验规范',
        date: '2018-09-11',
        url: 'localhost:3000/#/zh-CN/index',
        target: '_blank'
      },
      {
        text: '内置公共 API 并支持扩展；组件、主题均可扩展',
        date: '2018-09-11',
        url: 'localhost:3000/#/zh-CN/index'
      },
      {
        text: '丰富教程案例、FAQ、开源组件快速引入',
        date: '2018-09-11',
        url: 'localhost:3000/#/zh-CN/index'
      },
      {
        text: '内置 80+ web 组件拿来即用；内置 mock, UI 组件库与后端服务自由组合',
        url: 'localhost:3000/#/zh-CN/index',
        date: '2018-09-11'
      }
    ]
  ]
  const wrapper = mount(() => <BulletinBoard title="广告" data={data} tab-title={tabTitle}></BulletinBoard>)

  // attrs
  test('render test & options & tab-Title', async () => {
    expect(wrapper.find('.tiny-bulletin-board').exists()).toBeTruthy()
    expect(wrapper.findAll('.tiny-tabs__item')).toHaveLength(3)
    expect(wrapper.findAll('.tiny-tab-pane')).toHaveLength(3)
    expect(wrapper.find('.tiny-tabs__item').text()).toBe('TINY 更新日志')
  })

  test('title', async () => {
    expect(wrapper.find('.tiny-bulletin-board').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-bulletin-board__title').exists()).toBe(true)
    expect(wrapper.find('.tiny-bulletin-board__title').text()).toBe('广告')
  })

  test.todo('active-name ,设置默认激活的选项卡，默认值为 1')

  test.todo('icontab-item中第一条信息的字体图标')

  test.todo('show-more, 是否显示更多按钮，默认显示,需要与 more-link 同时使用，默认值为true')

  test.todo(
    'more-link更多按钮跳转地址，show-more 为true 的时候生效;moreLink: { url: "", // 跳转地址; route: "", // 跳转路由，url 和 route 属性二选一，url优先级高 target: "", // 跳转方式 text: "" // 链接文本 '
  )
})
