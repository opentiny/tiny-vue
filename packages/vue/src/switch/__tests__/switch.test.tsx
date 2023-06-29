import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Switch from '@opentiny/vue-switch'
import { nextTick } from 'vue'


let value = false

describe('PC Mode', () => {
  const mount = mountPcMode

  test('size', async () => {
    const wrapper = mount(() => <Switch mini={true}></Switch>)
    expect(wrapper.find('.mini').exists()).toBe(true)
  })

  test('slot', async () => {
    const wrapper = mount(() => <Switch v-model={value} show-text={true} v-slots={{
      open: () => <span class="yes">是</span>,
      close: () => <span class="no">否</span>
    }}></Switch>)
    expect(wrapper.find('.no').exists()).toBe(true)
  })

  test('events', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() => <Switch v-model={value} onChange={handleClick}></Switch>)
    await wrapper.find('.tiny-switch').trigger('click')
    await nextTick()
    expect(handleClick).toHaveBeenCalled()
  })

  test.todo('base 基本用法')
  test.todo('true-value & false-value 自定义开关取值')
  test.todo('disable 禁用状态')
})
