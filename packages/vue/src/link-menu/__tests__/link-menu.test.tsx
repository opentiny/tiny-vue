import { ref } from 'vue'
import LinkMenu from '@opentiny/vue-link-menu'
import { describe, expect, test } from 'vitest'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

describe('PC Mode', () => {
  const mount = mountPcMode

  const linkMenuMockData = ref([
    {
      id: 1,
      label: '更新日志'
    },
    {
      id: 2,
      label: '开发指南',
      children: [
        {
          id: 3,
          label: '引入组件',
          url: '#/webnova/zh-CN/guide/quickstart'
        },
        {
          id: 4,
          label: '国际化',
          url: '#/webnova/zh-CN/guide/i18n'
        },
        {
          id: 5,
          label: '权限',
          url: '#/webnova/zh-CN/guide/permission'
        }
      ]
    },
    {
      id: 6,
      label: '表单组件',
      children: [
        {
          id: 7,
          label: 'Button 按钮',
          url: '#/webnova/zh-CN/component/button'
        },
        {
          id: 8,
          label: 'Input 输入框',
          url: '#/webnova/zh-CN/component/input'
        }
      ]
    },
    {
      id: 9,
      label: '数据组件',
      children: [
        {
          id: 10,
          label: 'Pager 分页',
          url: '#/webnova/zh-CN/component/pager'
        },
        {
          id: 11,
          label: 'Tree 树形控件',
          url: '#/webnova/zh-CN/component/tree'
        }
      ]
    },
    {
      id: 12,
      label: '其他组件',
      children: [
        {
          id: 13,
          label: 'BulletinBoard 公告牌',
          url: '#/webnova/zh-CN/component/bulletin-board'
        },
        {
          id: 14,
          label: 'Tag 标签',
          url: '#/webnova/zh-CN/component/tag'
        }
      ]
    }
  ])

  /**
   * attrs
   */
  test('render & data', async () => {
    const wrapper = mount(() => (<LinkMenu data={linkMenuMockData.value}></LinkMenu>))
    const tinyLinkMenu = wrapper.findComponent({ name: 'TinyLinkMenu' })
    expect(tinyLinkMenu).toBeTruthy()
    expect(tinyLinkMenu.vm.state.datas.length).toBe(5)
  })

  test.todo('icon 自定义节点展开折叠的图标')

  test.todo('max-item 设置可收藏的栏目的最大数量')

  test.todo('title 自定义菜单左侧图标')

  test.todo('default-expand-all 设置打开菜单弹窗时默认是否展开所有节点，默认为 true')

  test.todo('search-icon 自定义搜索图标')

  test.todo('ellipsis 菜单内容超长时省略显示，默认为 true')

  test.todo('wrap 菜单内容超长时换行显示，默认为 false')

  test.todo('keep-selected-nodes 树节点勾选内容后，点击取消按钮，再次打开弹窗是否保留取消前勾选的内容的状态，默认为 true')

  test.todo('get-menu-data-sync 自定义菜单数据服务，直接返回数据')

  /**
   * slots
   */
  test('foot slot', async () => {
    const wrapper = mount(() => (<LinkMenu data={linkMenuMockData.value}>
        {{
            foot: () => <div>自定义插槽内容</div>
        }}
    </LinkMenu>))
    const tinyLinkMenu = wrapper.findComponent({ name: 'TinyLinkMenu' })
    await tinyLinkMenu.find('.tiny-link-menu__btn').trigger('click')
    expect(tinyLinkMenu.find('.tiny-dialog-box__footer div').text().includes('自定义插槽内容')).toBeTruthy()
  })

  /**
   * methods
   */
  test.todo('sureNodevalue 获取选中的菜单节点并关闭菜单弹窗，同时展示选中的菜单')

  test.todo('hideDialog 关闭菜单弹窗')
})
