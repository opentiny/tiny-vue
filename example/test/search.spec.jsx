import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Search } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

let value = ''

describe('search', () => {
  test('searchTypes', async () => {
    const searchTypes = [
      {
        text: '找人',
        value: 1
      },
      {
        text: '找文档',
        value: 2
      }
    ]
    const wrapper = mount(() => <Search search-types={searchTypes}></Search>)
    expect(wrapper.find('.tiny-search__text').exists()).toBe(true)
  })


  test('slot', async () => {
    const searchTypes1 = [
      {
        text: '插槽1',
        value: 1
      },
      {
        text: '插槽2',
        value: 2
      }
    ]
    const wrapper = mount(() => <Search search-types={searchTypes1} v-slots={{
      poplist: (slotScope) => <b>{slotScope.slotScope.text}</b>
    }}></Search>)
    expect(wrapper.find('.tiny-search__selector').attributes().style).toBe('display: none;')
    await wrapper.find('.tiny-search__present').trigger('click')
    await nextTick()
    expect(wrapper.find('.tiny-search__selector').attributes().style).not.toHaveProperty('display', 'none')
  })

  test('events', async () => {
    const handleSearch = vi.fn()
    const wrapper = mount(() => <Search onSearch={handleSearch}></Search>)
    await wrapper.find('a').trigger('click')
    await nextTick()
    expect(handleSearch).toHaveBeenCalled()
  })
})
