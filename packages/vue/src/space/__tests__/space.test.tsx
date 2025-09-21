import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Space from '@opentiny/vue-space'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base 基本用法', async () => {
    const wrapper = mount(() => (
      <Space>
        <span>Item 1</span>
        <span>Item 2</span>
      </Space>
    ))

    // 1. 验证容器元素
    expect(wrapper.find('[data-tag="tiny-space"]').exists()).toBe(true)

    // 2. 验证子元素
    expect(wrapper.findAll('[data-tag="tiny-space"] > *').length).toBe(2)

    // 3. 验证文本内容
    expect(wrapper.text()).toContain('Item 1')
    expect(wrapper.text()).toContain('Item 2')

    wrapper.unmount()
  })

  test('props direction', async () => {
    const wrapper = mount(() => (
      <Space direction="column">
        <span>Item 1</span>
        <span>Item 2</span>
      </Space>
    ))

    // 检查垂直方向的样式
    expect(wrapper.attributes('style')).toContain('flex-direction: column')
    wrapper.unmount()
  })

  test('props size', async () => {
    // 测试数组格式 - 根据实际实现，数组格式为 [horizontal, vertical]
    const wrapperArray = mount(() => <Space size={[10, 20]}></Space>)
    expect(wrapperArray.attributes('style')).toContain('gap: 20px 10px')
    wrapperArray.unmount()
  })

  test('props wrap', async () => {
    const wrapper = mount(() => <Space wrap></Space>)
    expect(wrapper.attributes('style')).toContain('flex-wrap: wrap')
    wrapper.unmount()
  })

  test('props align', async () => {
    const wrapper = mount(() => <Space align="center"></Space>)
    expect(wrapper.attributes('style')).toContain('align-items: center')
    wrapper.unmount()
  })

  // test('props order - full order sorting', async () => {
  //   const wrapper = mount(() => (
  //     <Space order={['2', '3', '1']}>
  //       <span key="1">Item 1</span>
  //       <span key="2">Item 2</span>
  //       <span key="3">Item 3</span>
  //     </Space>
  //   ))

  //   const items = wrapper.findAll('[data-tag="tiny-space"] > *')
  //   expect(items.length).toBe(3)
  //   expect(items[0].text()).toBe('Item 2')
  //   expect(items[1].text()).toBe('Item 3')
  //   expect(items[2].text()).toBe('Item 1')

  //   wrapper.unmount()
  // })

  // test('props order - partial order sorting', async () => {
  //   const wrapper = mount(() => (
  //     <Space order={['3']}>
  //       <span key="1">Item 1</span>
  //       <span key="2">Item 2</span>
  //       <span key="3">Item 3</span>
  //     </Space>
  //   ))

  //   const items = wrapper.findAll('[data-tag="tiny-space"] > *')
  //   expect(items.length).toBe(3)
  //   expect(items[0].text()).toBe('Item 3')
  //   // The rest should keep original order except '3' moved front
  //   expect(items[1].text()).toBe('Item 1')
  //   expect(items[2].text()).toBe('Item 2')

  //   wrapper.unmount()
  // })

  // test('props order - default order (empty array)', async () => {
  //   const wrapper = mount(() => (
  //     <Space order={[]}>
  //       <span key="1">Item 1</span>
  //       <span key="2">Item 2</span>
  //       <span key="3">Item 3</span>
  //     </Space>
  //   ))

  //   const items = wrapper.findAll('[data-tag="tiny-space"] > *')
  //   expect(items.length).toBe(3)

  //   expect(items[0].text()).toBe('Item 1')
  //   expect(items[1].text()).toBe('Item 2')
  //   expect(items[2].text()).toBe('Item 3')

  //   wrapper.unmount()
  // })
})
