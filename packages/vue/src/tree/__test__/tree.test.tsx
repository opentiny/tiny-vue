import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import Tree from '@opentiny/vue-tree'

const data = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
]

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('data 数据源', () => {
    const wrapper = mount(Tree, {
      props: { data }
    })
    expect(wrapper.find('.tiny-tree').exists()).toBe(true)
    expect(wrapper.findAll('.tiny-tree-node').length).toBe(2)
    expect(wrapper.find('.tiny-tree-node').text()).toBe('一级 1')
  })

  test.todo('expand-icon 指示展开的图标')

  test.todo('icon-trigger-click-node 点击图标展开节点时是否触发 node-click 事件')

  test.todo('show-contextmenu 右键点击节点是否弹窗自定义菜单')

  test.todo('shrink-icon 指示收缩的图标')

  test.todo('set-tree-icon 指示收缩的图标')

  test.todo('empty-text 内容为空的时候展示的文本')

  test.todo('render-after-expand 是否在第一次展开某个树节点后才渲染其子节点')

  test.todo('node-key 节点唯一标识属性名称')

  test.todo('check-strictly 在显示复选框的情况下，是否严格的遵循父子不互相关联')

  test.todo('default-expand-all 是否默认展开所有节点')

  test.todo('expand-on-click-node 点击节点展开收起开关')

  test.todo('check-on-click-node 是否在点击节点的时候选中节点')

  test.todo('auto-expand-parent 展开子节点的时候是否自动展开父节点')

  test.todo('default-checked-keys 配置默认选中节点')

  test.todo('default-expanded-keys 默认展开的节点的 key 的数组')

  test.todo('render-content 树节点的内容区的渲染方法')

  test.todo('show-checkbox 节点是否可被选择')

  test.todo('draggable 是否开启节点拖拽')

  test.todo('allow-drag 判断节点能否被拖拽')

  test.todo('props 配置选项')

  test.todo('highlight-current 是否高亮当前选中节点')

  test.todo('lazy 异步加载模式')

  test.todo('load 加载子树数据的方法')

  test.todo('filter-node-method 指定输入筛选时匹配的节点的字段值')

  test.todo('indent 相邻级节点间的水平缩进')

  test.todo('icon 自定义图标')

  /**
   * slots
   */
  test('slot-default', () => {
    const wrapper = mount(() => <Tree
      data={data}
      v-slots={{
        default: (scopeData: any) => <div class="custom-label">{scopeData.data.label}</div>
      }}
    ></Tree>)
    expect(wrapper.find('.custom-label').exists()).toBe(true)
  })

  test.todo('empty 自定义空数据文本')

  /** 
   * events
   */
  test('node-click', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() => <Tree data={data} onNodeClick={handleClick}></Tree>)
    await wrapper.find('.tiny-tree-node__content').trigger('click')
    await nextTick()
    expect(handleClick).toHaveBeenCalled()
  })

  test.todo('node-contextmenu 某一节点被鼠标右键点击事件')

  test.todo('check-change 节点选中状态发生变化时的回调')

  test.todo('check 当复选框被点击的时候触发')

  test.todo('current-change 当前选中节点变化时触发的事件')

  test.todo('node-expand 开节点后的事件')

  test.todo('node-collapse 收缩节点后的事件')

  test.todo('node-drag-start 节点开始拖拽时触发的事件')

  test.todo('node-drag-enter 拖拽进入其他节点时触发的事件')

  test.todo('node-drag-leave 拖拽离开某个节点时触发的事件')

  test.todo('node-drag-over 在拖拽节点时触发的事件')

  test.todo('node-drag-end 拖拽结束时（可能未成功）触发的事件')

  test.todo('node-drop 拖放节点后的事件')

  /**
   * methods
   */
  test.todo('filter 对树节点进行筛选操作')

  test.todo('updateKeyChildren 通过 keys 设置节点子元素')

  test.todo('getCheckedNodes 获取选中标识的数据')

  test.todo('setCheckedNodes 设置目前勾选的节点')

  test.todo('getCheckedKeys 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组')

  test.todo('setCheckedKeys 通过 keys 设置目前勾选的节点')

  test.todo('setChecked 通过 key / data 设置某个节点的勾选状态')

  test.todo('closeMenu 关闭右键点击节点弹窗自定义菜单')

  test.todo('getHalfCheckedNodes 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组')

  test.todo('getHalfCheckedKeys 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组')

  test.todo('getCurrentKey 获取当前被选中节点的 key')

  test.todo('getCurrentNode 获得当前的选中的节点')

  test.todo('setCurrentKey 通过 key 设置某个节点的当前选中状态')

  test.todo('setCurrentNode 通过 node 设置某个节点的当前选中状态')

  test.todo('getNode 根据 data 或者 key 拿到 Tree 组件中的 node')

  test.todo('remove 删除节点')

  test.todo('append 为 Tree 中的一个节点追加一个子节点')

  test.todo('insertBefore 为 Tree 的一个节点的前面增加一个节点')

  test.todo('insertAfter 根据节点数据在父节点下插入一个子节点')
})