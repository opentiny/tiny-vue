import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import Collapse from '@opentiny/vue-collapse'
import CollapseItem from '@opentiny/vue-collapse-item'
import { ref } from 'vue'
describe('PC Mode', () => {
  const mount = mountPcMode

  const handleChange = vi.fn()
  const activeNames = ref(['1'])
  const wrapper = mount(() => (
    <Collapse modelValue={activeNames.value} onChange={handleChange}>
      <CollapseItem title="一致性 Consistency" name="1">
        <div>面板内容1</div>
        <div>面板内容2</div>
      </CollapseItem>
      <CollapseItem title="反馈 Feedback" name="2">
        <div>面板内容3</div>
        <div>面板内容4</div>
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

  // ref test
  test('ref test', async () => {
    activeNames.value.push('2')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.is-active').exists()).toBeTruthy()
  })
})