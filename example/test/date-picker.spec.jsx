import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { DatePicker } from '@opentiny/vue'
import { ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

describe('date-picker', () => {
  test('readonly', async () => {
    let value = '2020/10/29'
    const wrapper = mount(() => <DatePicker v-model={value} readonly></DatePicker>)
    expect(wrapper.find('input').attributes()).toHaveProperty('readonly')
  })

  test('events', async () => {
    let value = ''
    const wrapper = mount(() => <DatePicker
      v-model={value}
    ></DatePicker>)
    expect(document.querySelector('.tiny-picker-panel')).toBe(null)
    await wrapper.find('input').trigger('focus')
    expect(document.querySelector('.tiny-picker-panel') !== 'null').toBe(true)
  })
})
