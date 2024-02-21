import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Alert from '@opentiny/vue-alert'
import { iconBoat } from '@opentiny/vue-icon'

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('render test & type & size', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => <Alert type="success" size="large" title={text} description="type 为 success" />)
    expect(wrapper.find('.tiny-alert__close').exists()).toBe(true)
    expect(wrapper.find('.tiny-alert__title').text()).toEqual(text)
    expect(wrapper.find('.tiny-alert').classes()).toContain('tiny-alert--large')
    expect(wrapper.find('.tiny-alert').classes()).toContain('tiny-alert--success')
  })

  test('icon', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => <Alert type="success" icon={iconBoat()} title={text} description="type 为 success" />)
    expect(wrapper.find('.tiny-alert__icon').exists()).toBe(true)
  })

  test('closable', () => {
    const wrapper = mount(() => <Alert closable={false}/>)
    expect(wrapper.find('.tiny-alert__close').exists()).toBeFalsy()
  })

  test('title', () => {
    const title = 'mock title when size is large'
    const wrapper = mount(() => <Alert size='large' title={title}/>)
    expect(wrapper.find('.tiny-alert__title').text()).toEqual(title)
  })

  test('center', () => {
    const wrapper = mount(() => <Alert center={true}/>)
    expect(wrapper.find('.is-center').exists()).toBeTruthy()
  })

  test('close-text', () => {
    const closeText = 'close'
    const wrapper = mount(() => <Alert closeText={closeText}/>)
    expect(wrapper.find('.tiny-alert__close').exists()).toBeFalsy()
    expect(wrapper.find('.is-custom').exists()).toBeTruthy()
    expect(wrapper.find('.is-custom').text()).toEqual(closeText)
  })

  test('show-icon', () => {
    const wrapper = mount(() => <Alert showIcon={false}/>)
    // close icon and alert icon use the same class
    expect(wrapper.findAll('.tiny-alert__icon').length).toEqual(1)
  })

  // slots
  test('title slot', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => (
      <Alert
        type="success"
        size="large"
        v-slots={{
          title: () => text
        }}
        description="type 为 success"
      />
    ))
    expect(wrapper.find('.tiny-alert__title').text()).toEqual(text)
  })

  test('default slot', () => {
    const text = 'default slot'
    const wrapper = mount(() => (
      <Alert size='large' v-slots={{ default: () => text }}/>
    ))
    expect(wrapper.find('.tiny-alert__opration').text()).toEqual(text)
  })

  test('description slot', () => {
    const text = 'description slot'
    const wrapper = mount(() => (
      <Alert size='large' v-slots={{ description: () => text }}/>
    ))
    expect(wrapper.find('.tiny-alert__description').text()).toEqual(text)
  })

  test('close event', async () => {
    const handleClose = vi.fn()
    const wrapper = mount(() => (
      <Alert size='large' onClose={handleClose}/>
    ))
    await wrapper.find('.tiny-alert__close').trigger('click')
    expect(handleClose).toHaveBeenCalled()
  })
})
