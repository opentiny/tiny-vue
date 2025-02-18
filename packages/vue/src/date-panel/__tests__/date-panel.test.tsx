import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import DatePanel from '@opentiny/vue-date-panel'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('value & format', async () => {
    let value = '2025-01-14'
    let format = 'yyyy-MM-dd'
    const wrapper = mount(() => <DatePanel v-model={value} format={format}></DatePanel>)

    await nextTick()
    expect(wrapper.find('.tiny-picker-panel').exists()).toBe(true)
  })
})
