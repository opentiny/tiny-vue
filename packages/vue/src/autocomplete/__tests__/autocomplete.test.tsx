import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test,vi } from 'vitest'
import Autocomplete from '@opentiny/vue-autocomplete'
import { nextTick } from 'vue'

const loadAll = [
  {
    value: 'GFD科技YX公司',
    address: '福州'
  },
  {
    value: 'WWWW科技YX公司',
    address: '深圳福田区'
  },
  {
    value: 'RFV有限责任公司',
    address: '中山市'
  }
]

const querySearch = (queryString, cb) => {
  const restaurants = loadAll
  let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
  cb(results)
}

const createFilter = (queryString) => (restaurant) => restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0

describe('PC Mode', () => {
  const mount = mountPcMode

  test('size', async () => {
    const value = 'GFD科技'
    const text = '请输入内容'
    const medium = 'medium'
    const wrapper = mount(() =>
      <Autocomplete v-model={value} hide-loading={true} size={medium} placeholder={text} fetch-suggestions={querySearch}>
      </Autocomplete>)
    expect(wrapper.find('.tiny-input-medium').exists()).toBe(true)

  })

  test('events', async () => {
    const value = ''
    const keys = 'name'
    const handleSelect = vi.fn()
    const wrapper = mount(() =>
      <Autocomplete v-model={value} select-when-unmatched={true} fetch-suggestions={querySearch} onSelect={handleSelect}>
      </Autocomplete>)
    await nextTick()
    const target = wrapper.getComponent(Autocomplete).vm
    await nextTick()
    target.handleKeyEnter()
    expect(handleSelect).toHaveBeenCalled()
  })

  test('slot', async () => {
    const value = ''
    const text = '请输入内容'
    const wrapper = mount(() => <Autocomplete v-model={value} placeholder={text} fetch-suggestions={querySearch} v-slots={{
      prepend: () => <div>前置内容</div>,
      append: () => <div>后置内容</div>
    }}>

    </Autocomplete>)
    expect(wrapper.find('.tiny-input-group__prepend').exists()).toBe(true)
    expect(wrapper.find('.tiny-input-group__append').exists()).toBe(true)
  })
})
