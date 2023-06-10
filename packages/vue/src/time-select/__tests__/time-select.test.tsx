import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import TimeSelect from '@opentiny/vue-time-select'
import { nextTick } from 'vue'
import { iconBoat } from '@opentiny/vue-icon'

let value = '18:00'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('placeholder', async () => {
    const wrapper = mount(() => <TimeSelect v-model={value} placeholder="选择时间"></TimeSelect>)
    expect(wrapper.find('input').attributes().placeholder).toBe('选择时间')
  })

  test('events', async () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    const wrapper = mount(() => <TimeSelect v-model={value} onFocus={handleFocus} onBlur={handleBlur} ></TimeSelect>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(handleFocus).toHaveBeenCalled()
    await document.querySelector('.tiny-time-select__item').click()
    await nextTick()
    expect(handleBlur).toHaveBeenCalled()
    expect(value).not.toBe('18:00')
  })

  test('icon', async () => {
    const wrapper = mount(() => <TimeSelect v-model={value} suffix-icon={iconBoat()}></TimeSelect>)
    expect(wrapper.find('.tiny-svg').exists()).toBe(true)
  })
})
