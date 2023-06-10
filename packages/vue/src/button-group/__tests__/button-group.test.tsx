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
})
