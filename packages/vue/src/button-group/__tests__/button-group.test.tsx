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
    const wrapper = mount(() => (
      <ButtonGroup data={groupData}>
        <Button>TEST</Button>
      </ButtonGroup>
    ))
    expect(wrapper.findAll('button').length).toBe(1)
  })

  test('events', async () => {
    const handleEdit = vi.fn()
    const checkedVal = 'Button1'
    const wrapper = mount(() => (
      <ButtonGroup
        show-edit={true}
        show-more={2}
        onEdit={handleEdit}
        data={groupData}
        v-model={checkedVal}></ButtonGroup>
    ))
    const buttons = wrapper.findAll('button')
    await buttons[buttons.length - 1].trigger('click')
    expect(handleEdit).toHaveBeenCalled()
  })

  test('set size ', async () => {
    const wrapper = mount(() => (
      <div class="button-group-demo">
        <ButtonGroup size="medium" data={groupData}></ButtonGroup>
        <ButtonGroup size="small" data={groupData}></ButtonGroup>
        <ButtonGroup size="mini" data={groupData}></ButtonGroup>
      </div>
    ))
    const buttonGroups = wrapper.findAll('.tiny-button-group')
    const [buttonGroupMedium, buttonGroupSmall, buttonGroupMini] = buttonGroups
    expect(buttonGroupMedium.classes()).toContain('tiny-button-group--medium')
    expect(buttonGroupSmall.classes()).toContain('tiny-button-group--small')
    expect(buttonGroupMini.classes()).toContain('tiny-button-group--mini')
  })

  test('set all button group disabled', async () => {
    const wrapper = mount(() => <ButtonGroup data={groupData} disabled></ButtonGroup>)
    wrapper.findAll('button').forEach((buttonDOMWrapper) => {
      expect(buttonDOMWrapper.classes()).toContain('disabled')
    })
  })

  test('set the second button disabled', async () => {
    const disabledGroup = [
      { text: 'Button1', value: 1 },
      { text: 'Button2', value: 2, disabled: true },
      { text: 'Button3', value: 3 }
    ]
    const wrapper = mount(() => <ButtonGroup data={disabledGroup}></ButtonGroup>)
    wrapper.findAll('button').forEach((buttonDOMWrapper, index) => {
      if (index === 1) {
        expect(buttonDOMWrapper.classes()).toContain('disabled')
      } else {
        expect(buttonDOMWrapper.classes()).not.toContain('disabled')
      }
    })
  })

  test('set button group is plain', async () => {
    const wrapper = mount(() => <ButtonGroup data={groupData} plain></ButtonGroup>)
    wrapper.findAll('button').forEach((buttonDOMWrapper) => {
      expect(buttonDOMWrapper.classes()).toContain('plain')
    })
  })

  test('set button group text-filed & value-filed', async () => {
    let checkedVal = 1
    const textField = 'text-key'
    const valueField = 'value-key'
    const groupData = [
      { 'text-key': 'Button1', 'value-key': 1 },
      { 'text-key': 'Button2', 'value-key': 2 },
      { 'text-key': 'Button3', 'value-key': 3 }
    ]
    const wrapper = mount(() => (
      <ButtonGroup
        data={groupData}
        v-model={checkedVal}
        data={groupData}
        textField={textField}
        valueField={valueField}></ButtonGroup>
    ))

    const buttons = wrapper.findAll('button')
    const clickButton = buttons[buttons.length - 1]
    await clickButton.trigger('click')
    expect(checkedVal).toBe(3)
  })

  test('set button group show edit button, and not show more button', async () => {
    const handleEdit = vi.fn()
    const wrapper = mount(() => (
      <ButtonGroup data={groupData} showMore={3} showEdit={true} onEdit={handleEdit}></ButtonGroup>
    ))
    const buttons = wrapper.findAll('button')
    const editButton = buttons[buttons.length - 1]
    await editButton.trigger('click')
    expect(editButton.classes()).toContain('edit-button')
    expect(handleEdit).toHaveBeenCalled()
  })

  test('set button group show edit button, and show more button', async () => {
    const handleEdit = vi.fn()
    const wrapper = mount(() => (
      <ButtonGroup data={groupData} showMore={1} showEdit={true} onEdit={handleEdit}></ButtonGroup>
    ))
    const buttons = wrapper.findAll('button')
    const moreButton = buttons[buttons.length - 2]
    expect(moreButton.classes()).toContain('more-button')
    const editButton = buttons[buttons.length - 1]
    await editButton.trigger('click')
    expect(editButton.classes()).toContain('edit-button')
    expect(handleEdit).toHaveBeenCalled()
  })

  test('set button group onChange event', async () => {
    const handleChange = vi.fn()
    const wrapper = mount(() => <ButtonGroup data={groupData} onChange={handleChange}></ButtonGroup>)
    const buttons = wrapper.findAll('button')
    await buttons[buttons.length - 1].trigger('click')
    expect(handleChange).toHaveBeenCalled()
  })

  test('set button group is no border', async () => {
    const wrapper = mount(() => <ButtonGroup data={groupData} border={false}></ButtonGroup>)
    expect(wrapper.classes()).toContain('tiny-button-group--borderless')
  })
})
