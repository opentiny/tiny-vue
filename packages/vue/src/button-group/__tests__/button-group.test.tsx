import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import ButtonGroup from '@opentiny/vue-button-group'
import Button from '@opentiny/vue-button'

const groupData = [
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
]

describe('PC Mode', () => {
  const mount = mountPcMode

  test('type & icon', async () => {
    const wrapper = mount(() => <ButtonGroup disabled data={groupData}></ButtonGroup>)
    expect(wrapper.find('button').classes()).toContain('disabled')
    expect(wrapper.findAll('button').length).toBe(3)
  })
  test('show-more', async () => {
    const checkedVal = 'Button1'
    const wrapper = mount(() => <ButtonGroup show-more={2} data={groupData}></ButtonGroup>)
    expect(wrapper.find('svg').classes()).toContain('tiny-svg')
    expect(wrapper.find('.tiny-group-item').classes()).toContain('show-more')
  })

  test('slot', async () => {
    const wrapper = mount(() => <ButtonGroup
      data={groupData}
    ><Button>TEST</Button></ButtonGroup>)
    expect(wrapper.findAll('button').length).toBe(1)
  })

  test('events', async () => {
    const handleEdit = vi.fn()
    const checkedVal = 'Button1'
    const wrapper = mount(() => <ButtonGroup show-edit={true} show-more={2} onEdit={handleEdit} data={groupData} v-model={checkedVal}></ButtonGroup>)
    const buttons = wrapper.findAll('button')
    await buttons[buttons.length - 1].trigger('click')
    expect(handleEdit).toHaveBeenCalled()
  })

  test.todo('size 设置按钮组尺寸')
  test.todo('disabled 设置按钮组禁用状态')
  test.todo('plain 设置按钮组为朴素按钮')
  test.todo('text-field & value-field 若按钮组数据对象中的字段不是默认的 text 和 value ，则可通过 text-field、value-field 属性进行映射')
  test.todo('show-edit 显示编辑按钮')
  test.todo('change 按钮组的change事件')
  test.todo('border 按钮组按钮有无边框')
})
