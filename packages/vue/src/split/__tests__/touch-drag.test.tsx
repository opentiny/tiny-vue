import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import Split from '@opentiny/vue-split'
import { hooks } from '@opentiny/vue-common'

const { nextTick } = hooks

const touch = (identifier: number, pageX: number, pageY = pageX) => ({ identifier, pageX, pageY })

const dispatchTouch = (
  target: EventTarget,
  type: string,
  touches: ReturnType<typeof touch>[],
  changedTouches = touches
) => {
  const event = new Event(type, { bubbles: true, cancelable: true })
  Object.defineProperties(event, { touches: { value: touches }, changedTouches: { value: changedTouches } })
  target.dispatchEvent(event)
  return event
}

describe('Split touch dragging', () => {
  const wrappers: ReturnType<typeof mountPcMode>[] = []
  const containers: HTMLElement[] = []
  const views = new Map<ReturnType<typeof mountPcMode>, ReturnType<typeof mountPcMode>>()
  const emitted = (wrapper: ReturnType<typeof mountPcMode>, name: string) => views.get(wrapper)?.emitted(name)
  const mount = (props = {}) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)
    const wrapper = mountPcMode(Split, {
      props: { modelValue: 0.5, leftTopMin: 0.1, rightBottomMin: 0.1, ...props },
      attachTo: container
    })
    Object.defineProperties(wrapper.element, {
      offsetWidth: { value: 400 },
      offsetHeight: { value: 400 }
    })
    views.set(wrapper, wrapper.findComponent({ ref: 'modeTemplate' }))
    wrappers.push(wrapper)
    return wrapper
  }
  const trigger = (wrapper: ReturnType<typeof mount>) => wrapper.find('.tiny-split-trigger-con').element

  afterEach(async () => {
    wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
    containers.splice(0).forEach((container) => container.remove())
    await nextTick()
    views.clear()
    vi.restoreAllMocks()
  })

  test.each(['horizontal', 'vertical'])('drags %s panels and emits the original touch event', async (mode) => {
    const wrapper = mount({ mode })
    const start = dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200)])
    const point = mode === 'horizontal' ? touch(1, 240, 200) : touch(1, 200, 240)
    const move = dispatchTouch(document, 'touchmove', [point])
    dispatchTouch(document, 'touchend', [], [point])
    await nextTick()

    expect(start.defaultPrevented).toBe(true)
    expect(move.defaultPrevented).toBe(true)
    expect(emitted(wrapper, 'update:modelValue')?.at(-1)).toEqual([0.6])
    expect(emitted(wrapper, 'moving')?.[0][0]).toBe(move)
    expect(emitted(wrapper, 'movestart')).toHaveLength(1)
    expect(emitted(wrapper, 'moveend')).toHaveLength(1)
    expect(wrapper.find('.no-select').exists()).toBe(false)
  })

  test.each([
    [0, 0.1],
    [600, 0.9]
  ])('respects panel thresholds at coordinate %s', (coordinate, expected) => {
    const wrapper = mount()
    dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200)])
    dispatchTouch(document, 'touchmove', [touch(1, coordinate)])
    expect(emitted(wrapper, 'update:modelValue')?.at(-1)).toEqual([expected])
  })

  test('supports pixel model values', async () => {
    const wrapper = mount({ modelValue: '200px', leftTopMin: '40px', rightBottomMin: '40px' })
    await nextTick()
    dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200)])
    dispatchTouch(document, 'touchmove', [touch(1, 240)])
    expect(emitted(wrapper, 'update:modelValue')?.at(-1)).toEqual(['240px'])
  })

  test('supports right-bottom-value', () => {
    const wrapper = mount({ rightBottomValue: true })
    dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200)])
    dispatchTouch(document, 'touchmove', [touch(1, 240)])
    expect(emitted(wrapper, 'update:modelValue')?.at(-1)).toEqual([0.4])
  })

  test('does not start a drag when disabled or when multiple fingers start together', () => {
    const disabled = mount({ disabled: true })
    expect(dispatchTouch(trigger(disabled), 'touchstart', [touch(1, 200)]).defaultPrevented).toBe(false)
    expect(emitted(disabled, 'movestart')).toBeUndefined()

    const wrapper = mount()
    dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200), touch(2, 300)])
    expect(emitted(wrapper, 'movestart')).toBeUndefined()
  })

  test('tracks the original finger and ignores another finger ending', () => {
    const wrapper = mount()
    dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200)])
    dispatchTouch(document, 'touchmove', [touch(2, 300), touch(1, 240)])
    expect(emitted(wrapper, 'update:modelValue')?.at(-1)).toEqual([0.6])
    dispatchTouch(document, 'touchend', [touch(1, 240)], [touch(2, 300)])
    expect(emitted(wrapper, 'moveend')).toBeUndefined()
    dispatchTouch(document, 'touchend', [], [touch(1, 240)])
    expect(emitted(wrapper, 'moveend')).toHaveLength(1)
  })

  test('cancels a touch drag and removes its document listeners', () => {
    const remove = vi.spyOn(document, 'removeEventListener')
    const wrapper = mount()
    dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200)])
    dispatchTouch(document, 'touchcancel', [], [touch(1, 200)])
    dispatchTouch(document, 'touchmove', [touch(1, 240)])
    expect(emitted(wrapper, 'update:modelValue')).toBeUndefined()
    expect(emitted(wrapper, 'moveend')).toHaveLength(1)
    for (const name of ['touchmove', 'touchend', 'touchcancel']) {
      expect(remove.mock.calls.some(([type]) => type === name)).toBe(true)
    }
  })

  test('cleans up when unmounted during a touch drag without emitting moveend', () => {
    const remove = vi.spyOn(document, 'removeEventListener')
    const wrapper = mount()
    dispatchTouch(trigger(wrapper), 'touchstart', [touch(1, 200)])
    wrappers.pop()
    wrapper.unmount()
    dispatchTouch(document, 'touchmove', [touch(1, 240)])
    dispatchTouch(document, 'touchend', [], [touch(1, 240)])
    expect(emitted(wrapper, 'update:modelValue')).toBeUndefined()
    expect(emitted(wrapper, 'moveend')).toBeUndefined()
    for (const name of ['touchmove', 'touchend', 'touchcancel']) {
      expect(remove.mock.calls.some(([type]) => type === name)).toBe(true)
    }
  })

  test('keeps collapse buttons tappable without starting a drag', async () => {
    const wrapper = mount({ triggerSimple: true, collapseLeftTop: true })
    const button = wrapper.find('.tiny-split-trigger-left-button')
    const start = dispatchTouch(button.element, 'touchstart', [touch(1, 200)])
    expect(start.defaultPrevented).toBe(false)
    expect(emitted(wrapper, 'movestart')).toBeUndefined()
    await button.trigger('click')
    expect(emitted(wrapper, 'left-top-click')).toHaveLength(1)
  })

  test('preserves mouse dragging and cleans up on unmount', () => {
    const remove = vi.spyOn(document, 'removeEventListener')
    const wrapper = mount()
    trigger(wrapper).dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: 200 }))
    document.dispatchEvent(new MouseEvent('mousemove', { clientX: 240 }))
    expect(emitted(wrapper, 'update:modelValue')?.at(-1)).toEqual([0.6])
    document.dispatchEvent(new MouseEvent('mouseup'))
    expect(emitted(wrapper, 'moveend')).toHaveLength(1)

    trigger(wrapper).dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: 200 }))
    wrappers.pop()
    wrapper.unmount()
    for (const name of ['mousemove', 'mouseup']) {
      expect(remove.mock.calls.filter(([type]) => type === name)).toHaveLength(2)
    }
  })
})
