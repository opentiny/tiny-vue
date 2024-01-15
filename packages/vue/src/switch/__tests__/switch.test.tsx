import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Switch from '@opentiny/vue-switch'
import { nextTick, ref } from 'vue'

let value = false

describe('PC Mode', () => {
  const mount = mountPcMode

  test('size', async () => {
    const wrapper = mount(() => <Switch mini={true}></Switch>)
    expect(wrapper.find('.mini').exists()).toBe(true)
  })

  test('slot', async () => {
    const wrapper = mount(() => (
      <Switch
        v-model={value}
        show-text={true}
        v-slots={{
          open: () => <span class="yes">是</span>,
          close: () => <span class="no">否</span>
        }}></Switch>
    ))
    expect(wrapper.find('.no').exists()).toBe(true)
  })

  test('events', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() => <Switch v-model={value} onChange={handleClick}></Switch>)
    await wrapper.find('.tiny-switch').trigger('click')
    await nextTick()
    expect(handleClick).toHaveBeenCalled()
  })

  test('base 基本用法', async () => {
    const switchValue = ref(false)
    const wrapper = mount(() => <Switch v-model={switchValue.value}></Switch>)
    expect(wrapper.find('.tiny-switch').exists()).toBe(true)
    switchValue.value = true
    await nextTick()
    expect(wrapper.find('.tiny-switch.tiny-switch-checked').exists()).toBe(true)
  })

  test('tabindex', () => {
    const wrapper = mount(() => <Switch tabindex="0" />)
    expect(wrapper.find('.tiny-switch').attributes().tabindex).toBe('0')
  })

  test('true-value & false-value 自定义开关取值', async () => {
    const switchValue = ref('yes')
    const wrapper = mount(() => <Switch v-model={switchValue.value} true-value="yes" false-value="no"></Switch>)
    expect(wrapper.find('.tiny-switch.tiny-switch-checked').exists()).toBe(true)
    await wrapper.find('.tiny-switch').trigger('click')
    await nextTick()
    expect(switchValue.value).toBe('no')
  })

  test('disable 禁用状态', async () => {
    const value = ref(true)
    const wrapper = mount(() => <Switch disabled v-model={value.value} />)

    expect(value.value).toEqual(true)
    await wrapper.find('.tiny-switch').trigger('click')
    expect(value.value).toEqual(true)
  })
})
