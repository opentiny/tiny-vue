import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Button } from '@opentiny/vue'
import { iconBoat } from '@opentiny/vue-icon'
import { ref, nextTick } from 'vue'

describe('Button ', () => {
  test('type & icon', async () => {
    const TEXT = '危险按钮'
    const wrapper = mount(() => (
      <Button type="danger" icon={iconBoat()}>
        {TEXT}
      </Button>
    ))
    expect(wrapper.find('.tiny-svg').exists()).toBe(true)
  })

  test('size & plain', async () => {
    const TEXT = '危险按钮'
    const SIZE = 'large'
    const wrapper = mount(() => (
      <Button type="danger" plain={true} size={SIZE}>
        {TEXT}
      </Button>
    ))
    expect(wrapper.find('.tiny-button').classes()).toContain('tiny-button--large')
    expect(wrapper.find('.tiny-button').classes()).toContain('is-plain')
  })

  test('circle & disabled', async () => {
    const disabledValue = ref(false)
    const wrapper = mount(() => (
      <Button circle={true} disabled={disabledValue.value}>
        c
      </Button>
    ))
    expect(wrapper.find('.tiny-button').classes()).toContain('is-circle')
    expect(wrapper.find('.is-disabled').exists()).toBe(false)
    disabledValue.value = true
    await nextTick()
    expect(wrapper.find('.tiny-button').classes()).toContain('is-disabled')
  })

  test('events', async () => {
    const handleClick = vi.fn()
    const TEXT = '危险按钮'
    const wrapper = mount(() => (
      <Button onClick={handleClick} type="danger">
        {TEXT}
      </Button>
    ))
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(handleClick).toBeCalled()
  })
})
