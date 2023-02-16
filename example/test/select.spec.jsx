import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Select, Option } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

const _mount = (template, data, otherObj) =>
  mount(
    {
      components: {
        'tiny-select': Select,
        'tiny-option': Option
      },
      template,
      data,
      ...otherObj,
    },
    {
      attachTo: 'body',
    }
  )

describe('select', () => {
  test('multiple-limit', async () => {
    let wrapper = _mount(
      `
      <tiny-select v-model="value" :multiple-limit="1" multiple>
        <tiny-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
        </tiny-option>
      </tiny-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        value: '选项2'
      })
    )
    await nextTick()
    await wrapper.find('input').trigger('click')
    expect(document.querySelector('.is-disabled') !== null).toBe(true)
  })

  test('slot', async () => {
    let value = ''
    const wrapper = mount(() => <Select v-model={value} v-slots={{
      empty: () => <div class="tips">没有选项</div>
    }}></Select>)
    await wrapper.find('input').trigger('click')
    expect(wrapper.find('.tips').exists()).toBe(true)
  })

  test('events', async () => {
    let value = ''
    const handleFocus = vi.fn()
    const wrapper = mount(() => <Select onFocus={handleFocus} v-model={value}></Select>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(handleFocus).toHaveBeenCalled()
  })
})
