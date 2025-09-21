import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Space from '@opentiny/vue-space'

describe('PC Mode', () => {
  const mount = mountPcMode

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

  test('slots', async () => {
    const wrapper = mount(() => (
      <Space>
        <span class="slot1">Slot 1</span>
        <span class="slot2">Slot 2</span>
      </Space>
    ))

    // 检查子元素渲染 - 使用更精确的选择器
    expect(wrapper.findAll('.slot1').length).toBe(1)
    expect(wrapper.findAll('.slot2').length).toBe(1)
    expect(wrapper.text()).toContain('Slot 1')
    expect(wrapper.text()).toContain('Slot 2')
    wrapper.unmount()
  })

  test('child element order', async () => {
    const wrapper = mount(() => (
      <Space>
        <span class="item">A</span>
        <span class="item">B</span>
        <span class="item">C</span>
      </Space>
    ))
    const items = wrapper.findAll('.item')
    expect(items.length).toBe(3)
    expect(items[0].text()).toBe('A')
    expect(items[1].text()).toBe('B')
    expect(items[2].text()).toBe('C')
    wrapper.unmount()
  })
})
