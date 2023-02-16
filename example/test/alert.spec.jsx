import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Alert } from '@opentiny/vue'
import { iconBoat } from '@opentiny/vue-icon'

describe('Alert ', () => {
  test('render test & type & size', async () => {
    const TEXT = 'Winter is coming'
    const wrapper = mount(() => <Alert type='success' size='large' title={TEXT} description='type 为 success' />)
    expect(wrapper.find('.tiny-alert__close').exists()).toBe(true)
    expect(wrapper.find('.tiny-alert__title').text()).toEqual(TEXT)
    expect(wrapper.find('.tiny-alert').classes()).toContain('tiny-alert--large')
    expect(wrapper.find('.tiny-alert').classes()).toContain('tiny-alert--success')
  })

  test('icon', async () => {
    const TEXT = 'Winter is coming'
    const wrapper = mount(() => <Alert type='success' icon={iconBoat()} title={TEXT} description='type 为 success' />)
    expect(wrapper.find('.tiny-alert__icon').exists()).toBe(true)
  })

  test('slot', async () => {
    const TEXT = 'Winter is coming'
    const wrapper = mount(() => <Alert
      type='success'
      size='large'
      v-slots={{
        title: () => TEXT
      }}
      description='type 为 success'
    />)
    expect(wrapper.find('.tiny-alert__title').text()).toEqual(TEXT)
  })

})
