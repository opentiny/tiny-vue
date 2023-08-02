import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import DropTimes from '@opentiny/vue-drop-times'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('size', async () => {
    let value = ''
    const wrapper = mount(() => <DropTimes v-model={value} size='medium'></DropTimes>)
    expect(wrapper.find('.tiny-select--medium').exists()).toBe(true)
  })

  test('events', async () => {
    const handleChange = vi.fn()
    let value = ''
    const wrapper = mount(() => <DropTimes v-model={value} onChange={handleChange}></DropTimes>)
    await wrapper.find('.tiny-select').trigger('click')
    await nextTick()
    await document.querySelector('.tiny-select-dropdown__item').click()
    expect(handleChange).toHaveBeenCalled()
  })
})
