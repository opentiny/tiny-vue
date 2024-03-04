import { ref } from 'vue'
import Transfer from '@opentiny/vue-transfer'
import { describe, expect, test, vi } from 'vitest'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

describe('PC Mode', () => {
  const mount = mountPcMode

  const transferMockData = () => {
    const data: any[] = []
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i,
        label: `选项-${i}`
      })
    }
    return data
  }

  /**
   * attrs
   */
  test('render & data & modelValue', async () => {
    const chooseValue = ref([0, 2, 4])
    const wrapper = mount(Transfer, {
      props: {
        data: transferMockData(),
        modelValue: chooseValue.value
      }
    })
    const tinyTransfer = wrapper.findComponent({ name: 'TinyTransfer' })
    expect(tinyTransfer).toBeTruthy()
    expect(tinyTransfer.vm.state.sourceData.length).toBe(7)
  })

  test.todo('filterable 是否可搜索，默认为 true')

  test.todo('filter-placeholder 搜索框占位符，默认为"请输入搜索内容"')

  test.todo('filter-method 设置穿梭框的搜索过滤字段')

  test.todo('titles 自定义列表标题')

  test.todo('button-texts 自定义按钮文案')

  test.todo('render-content 自定义数据项渲染函数')

  test.todo('format 列表顶部勾选状态文案')

  test.todo('props 数据源的字段别名')

  test.todo('left-default-checked 初始状态下左侧列表的已勾选项的 key 数组')

  test.todo('right-default-checked 初始状态下右侧列表的已勾选项的 key 数组')

  test.todo('target-order 右侧列表元素的排序策略')

  test.todo('to-left-disable 穿梭至左侧面板的按钮禁用')

  test.todo('to-right-disable 穿梭至右侧面板的按钮禁用')

  test.todo('show-all-btn 展示全部移动按钮')

  test.todo('drop-config 设置穿梭框列表项可拖拽')

  test.todo('columns 设置穿梭框的表格列配置')

  test.todo('page-vo 设置分页配置')

  test.todo('show-pager 设置是否显示分页，当渲染为表格时有效')

  test.todo('pager-op 设置分页配置，当渲染为表格时有效')

  test.todo('render 当plugin设置为Table时设置渲染为表格；当plugin设置为Tree渲染为树')

  test.todo('tree-op 当plugin设置为Tree渲染为树时，设置树的相关配置属性')

  /**
   * slots
   */
  test('left footer slot & right footer slot', async () => {
    const wrapper = mount(Transfer, {
      props: {
        data: transferMockData()
      },
      slots: {
        'left-footer': '<div>自定义左侧底部内容</div>',
        'right-footer': '<div>自定义右侧底部内容</div>'
      }
    })
    const footerContent = wrapper.findAll('.tiny-transfer-panel .tiny-transfer-panel__footer div')
    expect(footerContent[0].text().includes('自定义左侧底部内容')).toBeTruthy()
    expect(footerContent[1].text().includes('自定义右侧底部内容')).toBeTruthy()
  })

  test.todo('button-panel 自定义穿梭按钮')

  test.todo('default 自定义数据项的内容，参数为 { option }')

  test.todo('left-panel 左侧自定义内容')

  test.todo('right-panel 右侧自定义内容')

  /**
   * methods
   */
  test.todo('clearQuery 清空某个面板的搜索关键词')

  /**
   * events
   */
  test('left change event', async () => {
    const leftChangeEvent = vi.fn()
    const wrapper = mount(Transfer, {
      props: {
        data: transferMockData(),
        onLeftCheckChange: leftChangeEvent
      }
    })
    const tinyTransfer = wrapper.findComponent({ name: 'TinyTransfer' })
    await tinyTransfer.find('.tiny-transfer-panel__body .tiny-transfer-panel__list label').trigger('click')
    expect(leftChangeEvent).toBeCalled()
  })

  test.todo('change 右侧列表元素变化时触发')

  test.todo('right-check-change 右侧列表元素被用户选中/取消选中时触发')
})
