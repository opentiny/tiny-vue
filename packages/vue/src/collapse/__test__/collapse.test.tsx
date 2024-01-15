import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Collapse from '@opentiny/vue-collapse'
import CollapseItem from '@opentiny/vue-collapse-item'
import { ref } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  const activeNames = ref(['1', '3'])
  let brforeClose_flag = true
  let handleChange_flag = true
  const handleChange = (activeNames: string | string[]) => {
    handleChange_flag = false
  }
  const brforeClose = (name, activeNames, item) => {
    return brforeClose_flag
  }
  const wrapper = mount(() => (
    <Collapse v-model={activeNames.value} before-close={brforeClose} onChange={handleChange}>
      <CollapseItem title="一致性 Consistency" name="1" ref="1">
        <div>面板内容1</div>
        <div>面板内容2</div>
      </CollapseItem>
      <CollapseItem title="反馈 Feedback" name="2">
        <div>面板内容3</div>
        <div>面板内容4</div>
      </CollapseItem>
      <CollapseItem title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
      </CollapseItem>
    </Collapse>
  ))

  // attrs
  test('render test & v-model', async () => {
    expect(wrapper.find('.tiny-collapse').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-collapse-item').exists()).toBeTruthy()
    expect(wrapper.find('.is-active').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-collapse-item__content').isVisible()).toBeTruthy()
    expect(wrapper.findAll('.is-active').length / 3).toBe(2)
    await wrapper.find('.tiny-collapse-item__header').trigger('click')
    expect(activeNames.value).toEqual(['3'])
  })
  // ref test
  test('ref test', async () => {
    activeNames.value.push('2')
    await wrapper.vm.$nextTick()
    expect(activeNames.value).toEqual(['3', '2'])
    expect(wrapper.findAll('.is-active').length / 3).toBe(2)
  })

  test.todo('accordion ，是否手风琴模式，默认值为 false')

  test('before-close ，阻止折叠面板关闭事件', async () => {
    activeNames.value = []
    await wrapper.vm.$nextTick()
    expect(await wrapper.findAll('.is-active').length).toEqual(0)
    await wrapper.find('.tiny-collapse-item__header').trigger('click')
    expect(activeNames.value).toEqual(['1'])
    brforeClose_flag = false
    await wrapper.findAll('.tiny-collapse-item__header')[1].trigger('click')
    expect(activeNames.value).toEqual(['1'])
    brforeClose_flag = true
  })

  // events
  test('change event', async () => {
    expect(wrapper.find('.tiny-collapse').exists()).toBe(true)
    await wrapper.find('.tiny-collapse-item__header').trigger('click')
    expect(handleChange_flag).toBe(false)
  })
})
