import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Radio from '@opentiny/vue-radio'

let value = ''

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base 基本用法', () => {
    const wrapper = mount(() => <Radio v-model={value} label={'1'}>1</Radio>)
    expect(wrapper.find('.tiny-radio').exists()).toBe(true)
  })
  
  test('disabled 禁用状态', () => {
    const wrapper = mount(() => <Radio v-model={value} disabled={true}></Radio>)
    expect(wrapper.find('.is-disabled').exists()).toBe(true)
  })

  test('slot 默认插槽', () => {
    const wrapper = mount(() => <Radio v-model={value} v-slots={{
      default: () => <span class='des'>选项描述</span>
    }}></Radio>)
    expect(wrapper.find('.des').text()).toBe('选项描述')
  })

  test.todo('border 单选框是否带有边框')
  test.todo('vertical 单选框列表垂直布局')
  test.todo('text 单选框自定义文字内容')
  test.todo('name 指定单选框的key值')
  test.todo('change事件 当绑定值变化时，是否触发单选框change事件')
  test.todo('name 指定单选框的key值')
  test.todo('options 通过配置对象数组数据的形式来渲染单选组')
  test.todo('text-color、fill 通过 text-color 属性设置文本颜色，通过 fill 属性设置填充色和边框色')
  test.todo('label 通过label属性可以设置单选框的内容')
  test.todo('size 设置单选框尺寸')
  test.todo('options options传入配置数据，循环渲染单选框列表')
})
