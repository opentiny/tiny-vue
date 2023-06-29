import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import Collapse from '@opentiny/vue-collapse'
import CollapseItem from '@opentiny/vue-collapse-item'

describe('PC Mode', () => {
  const mount = mountPcMode

  const handleChange = vi.fn()
  const wrapper = mount(() => (
    <Collapse modelValue="1" onChange={handleChange}>
      <CollapseItem title="一致性 Consistency" name="1">
        <div>面板内容1</div>
        <div>面板内容2</div>
      </CollapseItem>
    </Collapse>
  ))

  // attrs
  test('render test & v-model', async () => {
    expect(wrapper.find('.tiny-collapse').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-collapse-item').exists()).toBeTruthy()
    expect(wrapper.find('.is-active').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-collapse-item__content').isVisible()).toBeTruthy()
  })

  test.todo('accordion ，是否手风琴模式，默认值为 false')

  test.todo('before-close ，阻止折叠面板关闭事件')

  // events
  test('change event', async () => {
    expect(wrapper.find('.tiny-collapse').exists()).toBe(true)
    await wrapper.find('.tiny-collapse-item__header').trigger('click')
    expect(handleChange).toBeCalled()
  })
})
