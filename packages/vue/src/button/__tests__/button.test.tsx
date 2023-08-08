import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Button from '@opentiny/vue-button'
import { iconBoat } from '@opentiny/vue-icon'
import { nextTick, ref } from 'vue'

const AXIOM = 'Hello OpenTiny'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('type & icon', async () => {
    const TEXT = '危险按钮'
    const wrapper = mount(() => <Button type='danger' icon={iconBoat()}>{TEXT}</Button>)
    expect(wrapper.find('.tiny-svg').exists()).toBe(true)
  })

  test('size & plain', async () => {
    const TEXT = '危险按钮'
    const SIZE = 'large'
    const wrapper = mount(() => <Button type='danger' plain={true} size={SIZE}>{TEXT}</Button>)
    expect(wrapper.find('.tiny-button').classes()).toContain('tiny-button--large')
    expect(wrapper.find('.tiny-button').classes()).toContain('is-plain')
  })

  test('circle & disabled', async () => {
    const disabledValue = ref(false)
    const wrapper = mount(() => <Button circle={true} disabled={disabledValue.value}>c</Button>)
    expect(wrapper.find('.tiny-button').classes()).toContain('is-circle')
    expect(wrapper.find('.is-disabled').exists()).toBe(false)
    disabledValue.value = true
    await nextTick()
    expect(wrapper.find('.tiny-button').classes()).toContain('is-disabled')
  })

  test('text', () => {
    const TEXT = '危险按钮'
    const wrapper = mount(() => <Button text={TEXT} type='danger'></Button>)
    expect(wrapper.find('.tiny-button').text()).toBe(TEXT)
  })

  test('round', async () => {
    const TEXT = '危险按钮'
    const roundValue = ref(false)
    const wrapper = mount(() => <Button round={roundValue.value}>{TEXT}</Button>)
    expect(wrapper.find('.tiny-button').classes()).not.toContain('is-round')
    roundValue.value = true
    await nextTick()
    expect(wrapper.find('.tiny-button').classes()).toContain('is-round')
  })

  test('img', () => {
    const url = ref('/static/images/mountain.png')
    const wrapper = mount(() => <Button><img src={url.value} /></Button>)
    expect(wrapper.find('img').exists()).toBeTruthy()
    expect(wrapper.find('img').attributes('src')).toBe(url.value)
  })

  test('loading', async () => {
    const TEXT = '危险按钮'
    const loadingValue = ref(false)
    const wrapper = mount(() => <Button loading={loadingValue.value}>{TEXT}</Button>)
    expect(wrapper.find('.tiny-button').classes()).not.toContain('is-loading')
    loadingValue.value = true
    await nextTick()
    expect(wrapper.find('.tiny-button').classes()).toContain('is-loading')
  })

  test('autofocus', async () => {
    const TEXT = '危险按钮'
    const autofocusValue = ref(false)
    const wrapper = mount(() => <Button autofocus={autofocusValue.value}>{TEXT}</Button>)
    expect(wrapper.find('.tiny-button').element.hasAttribute('autofocus')).toBeFalsy()
    autofocusValue.value = true
    await nextTick()
    expect(wrapper.find('.tiny-button').element.hasAttribute('autofocus')).toBeTruthy()
  })

  test('events', async () => {
    const handleClick = vi.fn()
    const TEXT = '危险按钮'
    const wrapper = mount(() => <Button onClick={handleClick} type='danger'>{TEXT}</Button>)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(handleClick).toBeCalled()
  })
})
