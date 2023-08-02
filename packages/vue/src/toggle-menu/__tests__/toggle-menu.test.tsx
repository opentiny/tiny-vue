import { ref, nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import ToggleMenu from '@opentiny/vue-toggle-menu'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

describe('PC Mode', () => {
  const mount = mountPcMode

  const toggleMenuMockData = ref([
    {
      id: 1,
      label: '更新日志'
    },
    {
      id: 2,
      label: '菜单内容超长是否换行显示，默认为不换行',
      children: [
        {
          id: 6,
          label: '引入组件',
          url: '#/webnova/zh-CN/guide/quickstart'
        },
        {
          id: 7,
          label: '国际化',
          url: '#/webnova/zh-CN/guide/i18n'
        },
        {
          id: 8,
          label: '权限',
          url: '#/webnova/zh-CN/guide/permission'
        }
      ]
    },
    {
      id: 3,
      label: '表单组件',
      children: [
        {
          id: 12,
          label: 'Button 按钮',
          url: '#/webnova/zh-CN/component/button'
        },
        {
          id: 13,
          label: 'Input 输入框',
          url: '#/webnova/zh-CN/component/input'
        }
      ]
    },
    {
      id: 4,
      label: '数据组件',
      children: [
        {
          id: 14,
          label: 'Pager 分页',
          url: '#/webnova/zh-CN/component/pager'
        },
        {
          id: 15,
          label: 'Tree 树形控件',
          url: '#/webnova/zh-CN/component/tree'
        }
      ]
    },
    {
      id: 5,
      label: '其他组件',
      children: [
        {
          id: 16,
          label: 'BulletinBoard 公告牌',
          url: '#/webnova/zh-CN/component/bulletin-board'
        },
        {
          id: 17,
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
    const wrapper = mount(() => <ToggleMenu data={toggleMenuMockData.value}></ToggleMenu>)
    await nextTick()
    const tinyToggleMenu = wrapper.findComponent({ name: 'TinyToggleMenu' })
    expect(tinyToggleMenu).toBeTruthy()
    expect(tinyToggleMenu.vm.state.datas.length).toBe(5)
    const treeNodes = wrapper.findAll('.tiny-tree-node')
    expect(treeNodes.length).toBe(5)
  })

  test.todo('draggable 设置是否开启拖拽节点的功能，默认为 false')

  test.todo('show-filter 设置是否展示过滤搜索框，默认为 true')

  test.todo('icon 自定义菜单左侧图标')

  test.todo('default-expand-all 设置菜单默认是否展开所有节点，默认为 false')

  test.todo('expand-on-click-node 设置是否可以通过点击节点展开/收起菜单，默认为 false')

  test.todo('placeholder 输入框占位符')

  test.todo('ellipsis 菜单内容超长时省略显示，默认为 false')

  test.todo('wrap 菜单内容超长时换行显示，默认为 false')

  test.todo('automatic-filtering 输入框输入内容时是否自动过滤内容，默认为 true')

  test.todo('props 配置数据选项的映射字段名称')

  test.todo('get-menu-data-async 自定义菜单数据服务,返回异步数据,需返回 Promise 对象')

  /**
   * slots
   */
  test('node slot', async () => {
    const wrapper = mount(() =>
      <ToggleMenu data={toggleMenuMockData.value}>
        {{
          node: ({ label }) => <div>菜单项：{label}</div>
        }}
      </ToggleMenu>
    )
    await nextTick()
    const treeNodes = wrapper.find('.tiny-tree-node')
    const firstOption = toggleMenuMockData.value[0]
    expect(treeNodes.find('.tiny-toggle-menu__name div').text()).toBe(`菜单项：${firstOption.label}`)
  })

  /**
   * events
   */
  test('node click', async () => {
    const clickHandler = vi.fn()
    const wrapper = mount(() => (
      <ToggleMenu data={toggleMenuMockData.value} onNodeClick={clickHandler}></ToggleMenu>
    ))
    await nextTick()
    await wrapper.find('.tiny-tree-node .tiny-toggle-menu__body').trigger('click')
    expect(clickHandler).toBeCalled()
  })

  test.todo('node-expand 节点被展开时触发的事件')

  test.todo('node-collapse 节点被关闭时触发的事件')

  test.todo('node-drag-start 节点开始拖拽时触发的事件')

  test.todo('node-drag-enter 拖拽进入其他节点时触发的事件')

  test.todo('node-drag-leave 拖拽离开某个节点时触发的事件')

  test.todo('node-drag-over 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）')

  test.todo('node-drag-end 拖拽结束时触发的事件')

  test.todo('node-drop 拖放节点后的事件。开启 draggable 属性为 true 有效')
})
