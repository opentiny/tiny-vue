import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Select from '@opentiny/vue-select'
import BaseSelect from '@opentiny/vue-base-select'
import Input from '@opentiny/vue-input'
import Option from '@opentiny/vue-option'

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0))

describe.each([
  ['Select', Select],
  ['BaseSelect', BaseSelect]
])('%s numeric values', (_name, component) => {
  test.each([0, 1])('keeps numeric modelValue %s without an Input prop warning', async (value) => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = mountPcMode(component, {
      props: { modelValue: value, options: [{ value, label: '北京' }] }
    })

    try {
      await flushPromises()
      expect(wrapper.find('input').element.value).toBe('北京')
      expect(wrapper.props('modelValue')).toBe(value)
      expect(typeof wrapper.findComponent(Input).props('displayOnlyContent')).toBe('string')
      expect(warn.mock.calls.some((args) => args.join(' ').includes('displayOnlyContent'))).toBe(false)
    } finally {
      wrapper.unmount()
      warn.mockRestore()
    }
  })

  test('shows an unmatched numeric value until its options arrive', async () => {
    const wrapper = mountPcMode(component, { props: { modelValue: 123, options: [] } })

    try {
      await flushPromises()
      expect(wrapper.findComponent(Input).props('displayOnlyContent')).toBe('123')
      await wrapper.setProps({ options: [{ value: 123, label: '上海' }] })
      await flushPromises()
      expect(wrapper.find('input').element.value).toBe('上海')
      expect(wrapper.props('modelValue')).toBe(123)
    } finally {
      wrapper.unmount()
    }
  })

  test('normalizes numeric labels in display-only mode, including zero', async () => {
    const wrapper = mountPcMode(component, {
      props: { modelValue: 1, displayOnly: true, options: [{ value: 1, label: 0 }] }
    })

    try {
      await flushPromises()
      expect(wrapper.findComponent(Input).props('displayOnlyContent')).toBe('0')
    } finally {
      wrapper.unmount()
    }
  })

  test('supports numeric values in option slots', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = mountPcMode(component, {
      props: { modelValue: 1 },
      slots: { default: { components: { Option }, template: '<Option :value="1" label="北京" />' } }
    })

    try {
      await flushPromises()
      expect(wrapper.find('input').element.value).toBe('北京')
      expect(warn.mock.calls.some((args) => args.join(' ').includes('displayOnlyContent'))).toBe(false)
    } finally {
      wrapper.unmount()
      warn.mockRestore()
    }
  })
})
