import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import Calendar from '@opentiny/vue-calendar'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))

describe('Calendar reactive mode', () => {
  const wrappers: ReturnType<typeof mountPcMode>[] = []
  const containers: HTMLElement[] = []
  const mount = (mode = 'month') => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)
    const wrapper = mountPcMode(Calendar, {
      props: { mode, year: 2024, month: 2, events: [] },
      attachTo: container
    })
    wrappers.push(wrapper)
    return wrapper
  }

  afterEach(() => {
    wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
    containers.splice(0).forEach((container) => container.remove())
  })

  test.each(['month', 'year'])('updates the view when mode changes from %s and back', async (mode) => {
    const wrapper = mount(mode)
    const main = () => wrapper.find('.tiny-calendar__main')
    const otherMode = mode === 'month' ? 'year' : 'month'

    expect(main().classes()).toContain(mode)
    await wrapper.setProps({ mode: otherMode })
    await flush()
    expect(main().classes()).toContain(otherMode)
    expect(main().find('table:nth-of-type(1)').isVisible()).toBe(otherMode === 'month')
    expect(main().find('table:nth-of-type(2)').isVisible()).toBe(otherMode === 'year')

    await wrapper.setProps({ mode })
    await flush()
    expect(main().classes()).toContain(mode)
    expect(main().find('table:nth-of-type(1)').isVisible()).toBe(mode === 'month')
    expect(main().find('table:nth-of-type(2)').isVisible()).toBe(mode === 'year')
  })

  test('keeps the selected date and navigation when switching views', async () => {
    const wrapper = mount()
    const selectedDay = Array.from(
      wrapper.element.querySelectorAll<HTMLTableCellElement>('.tiny-calendar__main.month table:first-of-type td')
    ).find(
      (day) => !day.querySelector('.tiny-calendar__day.disable') && day.querySelector('.label')?.textContent === '15'
    )
    expect(selectedDay).toBeDefined()
    selectedDay!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await flush()
    const selection = wrapper.find('.tiny-calendar__main.month .tiny-calendar__day.selected').text()

    await wrapper.setProps({ mode: 'year' })
    expect(wrapper.find('.tiny-calendar__main').classes()).toContain('year')
    await wrapper.setProps({ mode: 'month' })
    expect(wrapper.find('.tiny-calendar__main.month .tiny-calendar__day.selected').text()).toBe(selection)
    expect(wrapper.find('.tiny-calendar__tool input').element.value).toContain('2024')
  })

  test('still permits toolbar switching after an external mode update', async () => {
    const wrapper = mount()
    await wrapper.setProps({ mode: 'year' })
    expect(wrapper.find('.tiny-calendar__main').classes()).toContain('year')
    await wrapper.find('.tiny-calendar__tabs li:nth-child(1)').trigger('click')
    expect(wrapper.find('.tiny-calendar__main').classes()).toContain('month')
    await wrapper.find('.tiny-calendar__tabs li:nth-child(2)').trigger('click')
    expect(wrapper.find('.tiny-calendar__main').classes()).toContain('year')
  })
})
