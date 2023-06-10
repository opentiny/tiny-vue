import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Alert from '@opentiny/vue-alert'
import { iconBoat } from '@opentiny/vue-icon'

describe('PC Mode', () => {
  const mount = mountPcMode

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

  test('slot', async () => {
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
})
