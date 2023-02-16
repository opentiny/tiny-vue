import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Radio } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

let value = ''

describe('radio', () => {
  test('disabled', async () => {
    const wrapper = mount(() => <Radio v-model={value} disabled={true}></Radio>)
    expect(wrapper.find('.is-disabled').exists()).toBe(true)
  })

  test('slot', async () => {
    const wrapper = mount(() => <Radio v-model={value} v-slots={{
      default: () => <span class='des'>选项描述</span>
    }}></Radio>)
    expect(wrapper.find('.des').text()).toBe('选项描述')
  })

  test('events', async () => {
    const change = vi.fn()
    const wrapper = mount(() => <Radio v-model={value} onChange={change}></Radio>)
    await wrapper.find('.tiny-radio__input').trigger('click')
    await nextTick()
    expect(change).toHaveBeenCalled()

  })
})
