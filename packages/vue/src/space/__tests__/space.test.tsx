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

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('props size', async () => {
    const wrapper = mount(() => <Space size={[10, 20]}></Space>)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('props wrap', async () => {
    const wrapper = mount(() => <Space wrap></Space>)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('props align', async () => {
    const wrapper = mount(() => <Space align="center"></Space>)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('slots', async () => {
    const wrapper = mount(() => (
      <Space>
        <span class="slot1">Slot 1</span>
        <span class="slot2">Slot 2</span>
      </Space>
    ))
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('child element order', async () => {
    const wrapper = mount(() => (
      <Space>
        <span class="item">A</span>
        <span class="item">B</span>
        <span class="item">C</span>
      </Space>
    ))
    expect(wrapper.html()).toMatchSnapshot()
  })
})
