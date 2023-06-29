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

  // 通过 disabled 属性可以设置为禁用状态
  test.todo('disabled')

  // 配置 clearable 属性后，输入内容后会显示清除图标，单击可以清除输入框内容
  test.todo('clearable')

  // 配置 prefix-icon 和 suffix-icon 属性可分别自定义输入框前后置图标
  test.todo('custom-icon')

  // 通过 prefix 和 suffix 插槽也可以分别自定义输入框前后置图标
  test.todo('prefix-suffix-slot')

  // 通过 debounce 属性可以设置获取输入建议的去抖延时，默认值为 300 毫秒
  test.todo('debounce')

  // 设置 hide-loading 属性为 true ,可以隐藏加载图标
  test.todo('hide-loading')

  // 占位文本
  test.todo('placeholder')

  // 通过作用域插槽可以自定义输入建议模板
  test.todo('cust-template')

  // 通过 fetch-suggestions 属性设置远程搜索
  test.todo('fetch-suggestions')

  // 输入内容后，建议列表中默认显示输入建议对象中 value 键名对应的值，若对象中没有 value 键名，就可以通过 value-key 属性指定显示的键名
  test.todo('value-key')

  // popper-class 属性可指定一个样式类名，可自定义建议列表的样式。 popper-append-to-body 属性可设置是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false
  test.todo('popper-class')

  // placement 属性可以设置菜单弹出位置，默认为 bottom-start。可选值有 top、top-start、top-end、bottom、bottom-start、bottom-end
  test.todo('placement')

  // 设置 highlight-first-item 属性为 true ,可以突出显示远程搜索建议中的第一项
  test.todo('highlight-first-item')

  // 默认输入框聚焦就会显示全部的建议列表，但设置 trigger-on-focus 属性为 false 后只有在匹配到输入建议后才会显示匹配到的建议列表
  test.todo('no-trigger-on-focus')
})
