import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Cascader from '@opentiny/vue-cascader'

test('ignores node selection after the open cascader becomes disabled', async () => {
  const onUpdate = vi.fn()
  const wrapper = mount(Cascader, {
    attachTo: document.body,
    props: {
      modelValue: ['apple'],
      'onUpdate:modelValue': onUpdate,
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Orange', value: 'orange' }
      ]
    }
  })
  try {
    await wrapper.get('input').trigger('click')
    const option = Array.from(document.querySelectorAll<HTMLElement>('.tiny-cascader-node')).find(
      (item) => item.textContent?.trim() === 'Orange'
    )
    expect(option).toBeDefined()

    await new Promise((resolve) => setTimeout(resolve, 0))
    onUpdate.mockClear()
    await wrapper.setProps({ disabled: true })
    option?.click()
    await wrapper.vm.$nextTick()
    expect(onUpdate).not.toHaveBeenCalled()
  } finally {
    wrapper.unmount()
  }
})
