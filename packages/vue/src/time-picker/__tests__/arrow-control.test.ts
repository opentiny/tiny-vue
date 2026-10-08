import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import TimePicker from '@opentiny/vue-time-picker'
import TimeSpinner from '@opentiny/vue-time-spinner'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))

describe.each([false, true])('TimePicker reactive arrow control (isRange=%s)', (isRange) => {
  const wrappers: ReturnType<typeof mountPcMode>[] = []
  const containers: HTMLElement[] = []
  const mount = (props = {}) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)
    const time = new Date(2024, 1, 15, 12, 30, 20)
    const wrapper = mountPcMode(TimePicker, {
      props: { modelValue: isRange ? [time, new Date(2024, 1, 15, 14, 30, 20)] : time, isRange, ...props },
      attachTo: container
    })
    wrappers.push(wrapper)
    return wrapper
  }
  const open = async (wrapper: ReturnType<typeof mount>) => {
    await wrapper.find('input').trigger('focus')
    await flush()
  }
  const expectMode = (wrapper: ReturnType<typeof mount>, arrow: boolean) => {
    const spinners = wrapper.findAllComponents(TimeSpinner)
    expect(spinners).toHaveLength(isRange ? 2 : 1)
    for (let index = 0; index < spinners.length; index++) {
      const spinner = spinners.at(index)!
      expect(spinner.props('arrowControl')).toBe(arrow)
      expect(spinner.find('.tiny-time-spinner__arrow').exists()).toBe(arrow)
    }
  }

  afterEach(async () => {
    wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
    containers.splice(0).forEach((container) => container.remove())
    await flush()
  })

  test.each([false, true])('switches a mounted panel from arrowControl=%s and back', async (initial) => {
    const wrapper = mount({ arrowControl: initial })
    await open(wrapper)
    expectMode(wrapper, initial)

    await wrapper.setProps({ arrowControl: !initial })
    await flush()
    expectMode(wrapper, !initial)
    await wrapper.setProps({ arrowControl: initial })
    await flush()
    expectMode(wrapper, initial)
  })

  test('can update arrowControl before the panel is first opened', async () => {
    const wrapper = mount({ arrowControl: false })
    await wrapper.setProps({ arrowControl: true })
    await open(wrapper)
    expectMode(wrapper, true)
  })

  test('also synchronizes timeArrowControl', async () => {
    const wrapper = mount({ timeArrowControl: false })
    await open(wrapper)
    await wrapper.setProps({ timeArrowControl: true })
    await flush()
    expectMode(wrapper, true)
    await wrapper.setProps({ timeArrowControl: false })
    await flush()
    expectMode(wrapper, false)
  })

  test('restores scroll listeners when switching from arrows to lists', async () => {
    const wrapper = mount({ arrowControl: true })
    await open(wrapper)
    await wrapper.setProps({ arrowControl: false })
    await flush()
    expectMode(wrapper, false)
    const spinners = wrapper.findAllComponents(TimeSpinner)
    for (let index = 0; index < spinners.length; index++) {
      const spinner = spinners.at(index)!
      const wraps = spinner.findAll('.tiny-scrollbar__wrap')
      expect(wraps.length).toBeGreaterThanOrEqual(2)
      for (let wrapIndex = 0; wrapIndex < wraps.length; wrapIndex++) {
        expect(typeof (wraps.at(wrapIndex)!.element as HTMLElement).onscroll).toBe('function')
      }
    }
  })

  test.each([false, true])('preserves pickerOptions.arrowControl=%s precedence', async (option) => {
    const wrapper = mount({ arrowControl: false, pickerOptions: { arrowControl: option } })
    await open(wrapper)
    expectMode(wrapper, option)
    await wrapper.setProps({ arrowControl: true })
    await flush()
    expectMode(wrapper, option)
    await wrapper.setProps({ arrowControl: false })
    await flush()
    expectMode(wrapper, option)
  })
})
