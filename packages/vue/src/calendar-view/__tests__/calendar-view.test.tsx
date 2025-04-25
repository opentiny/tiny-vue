import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import CalendarView from '@opentiny/vue-calendar-view'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('value', async () => {
    const wrapper = mount(() => <CalendarView year={2023} month={5}></CalendarView>)

    await nextTick()
    expect(wrapper.find('.tiny-calendar-view').exists()).toBe(true)
  })
})
