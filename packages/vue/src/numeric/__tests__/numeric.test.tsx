import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Numeric from '@opentiny/vue-numeric'
import { nextTick } from 'vue'

let value = 1

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('size', async () => {
    const wrapper = mount(() => <Numeric v-model={value} size="medium"></Numeric>)
    expect(wrapper.find('.tiny-input-medium').exists()).toBe(true)
  })

  test('events', async () => {
    const focus = vi.fn()
    const wrapper = mount(() => <Numeric v-model={value} onFocus={focus}></Numeric>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(focus).toHaveBeenCalled()
  })
})
