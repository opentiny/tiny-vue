import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { expect, test, describe } from 'vitest'
import ColorPicker from '@opentiny/vue-color-picker'

describe('PC Mode', () => {
  const mount = mountPcMode
  describe('default color', () => {
    test('static', () => {
      const wrapper = mount(ColorPicker, {
        props: {
          modelValue: '#66ccff'
        }
      })
      expect(wrapper.classes()).toContain('tiny-color-picker__trigger')
      expect(wrapper.find('div .tiny-color-picker__inner').attributes().style).toContain('102, 204, 255')
    })
    test('dynmaic', async () => {
      const wrapper = mount(ColorPicker, {
        props: {
          modelValue: '#66ccff'
        }
      })
      expect(wrapper.find('div .tiny-color-picker__inner').attributes().style).toContain('102, 204, 255')
      await wrapper.setProps({ modelValue: '#000' })
      expect(wrapper.find('div .tiny-color-picker__inner').attributes().style).not.toContain('102, 204, 255')
    })
  })
  test('should show color-select wrapper when visible is true', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#66ccff',
        visible: true
      }
    })
    expect(wrapper.findAll('button').length).not.toBe(0)
    test('should hidden when click trigger, even if visible is true', async () => {
      await wrapper.trigger('click')
      expect(wrapper.findAll('button').length).toBe(0)
    })
  })
  test('should show color-select wrapper when click', async () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#66ccff'
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.findAll('button').length).not.toBe(0)
    await wrapper.trigger('click')
    expect(wrapper.findAll('button').length).toBe(0)
  })
  test('should not be throw when v-model is undefined', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        visible: false
      }
    })
    expect(wrapper.find('div .tiny-color-picker__inner').attributes().style).toContain('transparent')
  })
})
