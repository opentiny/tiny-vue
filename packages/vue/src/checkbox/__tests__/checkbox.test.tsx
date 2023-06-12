import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Checkbox from '@opentiny/vue-checkbox'

let checked = ''

describe('PC Mode', () => {
  const mount = mountPcMode
  
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
})
