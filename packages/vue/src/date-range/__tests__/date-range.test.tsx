import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import DateRange from '@opentiny/vue-date-range'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('value', async () => {
    let value = ['2025-01-15', '2025-02-15']
    const wrapper = mount(() => <DateRange v-model={value}></DateRange>)

    await nextTick()
    expect(wrapper.find('.tiny-picker-panel').exists()).toBe(true)
  })
})
