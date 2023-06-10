import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import DatePicker from '@opentiny/vue-date-picker'

describe('PC Mode', () => {
  const mount = mountPcMode
  
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
