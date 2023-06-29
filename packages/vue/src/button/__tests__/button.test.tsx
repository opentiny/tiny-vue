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

  test('events', async () => {
    const handleClick = vi.fn()
    const TEXT = '危险按钮'
    const wrapper = mount(() => <Button onClick={handleClick} type='danger'>{TEXT}</Button>)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(handleClick).toBeCalled()
  })

  test.todo('test 设置文字按钮')
  test.todo('round 设置圆角按钮')
  test.todo('img 设置图片按钮')
  test.todo('loading 设置按钮为加载中状态')
  test.todo('autofocus 设置按钮默认为聚焦状态')
})
