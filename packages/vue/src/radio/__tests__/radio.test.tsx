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

  // 通过 v-model 绑定变量，设置的变量值为默认选中的 Radio，变量值对应 label 属性的值。通过 text 也可以配置显示文本，与默认插槽配置纯文本的结果一致 label 可以是 String、Number 或 Boolean
  test.todo('v-model')

  // 配置式单选组
  test.todo('options')

  // 可通过设置 border 属性，给单选框增加边框
  test.todo('border')

  // 可在 RadioGroup 组件上设置 vertical 属性，使单选框垂直布局
  test.todo('vertical')

  // 按钮形式的 Radio 激活时可通过 text-color 属性设置文本颜色，通过 fill 属性设置填充色和边框色
  test.todo('text-color & fill')

  // 可在 Radio 组件上设置 text 属性，设置内容
  test.todo('text')

  // 通过 label 属性可以设置 Radio 的内容
  test.todo('label')

  // name
  test.todo('name')

  // 可对按钮形式的 Radio 或带有边框的 Radio 设置 size 属性，以改变其尺寸，包括 medium、small、mini 三个选项
  test.todo('size')

  // 可在 Radio、RadioGroup 组件上设置 change 事件，当绑定值变化时触发，回调函数为选中的 Radio label 值
  test.todo('change事件')
})
