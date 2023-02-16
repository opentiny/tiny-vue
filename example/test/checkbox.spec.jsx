import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Checkbox, CheckboxGroup, CheckboxButton } from '@opentiny/vue'
import { ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

let checked = ''
describe('checkbox', () => {
  test('size', async () => {
    const wrapper = mount(() => <Checkbox
      v-model={checked}
      text='复选框'
      true-label='真文本'
      false-label='假文本'
    ></Checkbox>)
    expect(wrapper.find('.tiny-checkbox__original').attributes()['false-value']).toBe('假文本')
  })

  test('slot', async () => {
    const wrapper = mount(() => <Checkbox
      label='复选框1'
      v-slots={{
        default: () => <span class="only-slot">复选框1</span>
      }}
    ></Checkbox>)
    expect(wrapper.find('.only-slot').exists()).toBe(true)
  })

  test('events', async () => {
    const handleChange = vi.fn()
    let checkedVal = []
    const wrapper = mount(() => <CheckboxGroup onChange={handleChange} v-model={checkedVal}>
      <CheckboxButton label='复选框1'></CheckboxButton>
      <CheckboxButton label='复选框2'></CheckboxButton>
    </CheckboxGroup>)
    await wrapper.find('.tiny-checkbox-button').trigger('click')
    expect(handleChange).toHaveBeenCalled()
  })
})
