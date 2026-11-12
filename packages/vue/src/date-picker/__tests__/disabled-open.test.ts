import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import DatePicker from '@opentiny/vue-date-picker'

test('ignores date clicks after the open picker becomes disabled', async () => {
  const onUpdate = vi.fn()
  const wrapper = mount(DatePicker, {
    attachTo: document.body,
    props: { modelValue: '2026-11-12', 'onUpdate:modelValue': onUpdate }
  })
  try {
    const input = wrapper.get('input')
    await input.trigger('focus')
    await input.trigger('click')
    const cell = Array.from(document.querySelectorAll<HTMLElement>('.tiny-date-table td')).find(
      (item) => item.textContent?.trim() === '18'
    )
    expect(cell).toBeDefined()

    await new Promise((resolve) => setTimeout(resolve, 0))
    onUpdate.mockClear()
    await wrapper.setProps({ disabled: true })
    cell?.click()
    await wrapper.vm.$nextTick()
    expect(onUpdate).not.toHaveBeenCalled()
  } finally {
    wrapper.unmount()
  }
})
