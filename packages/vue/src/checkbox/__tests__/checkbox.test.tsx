import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Checkbox from '@opentiny/vue-checkbox'

let checked = ''

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base', () => {
    const wrapper = mount(() => (
      <Checkbox v-model={checked}>复选框</Checkbox>
    ))
    expect(wrapper.find('.tiny-checkbox').exists()).toBe(true)
  })
  
  test('true-label & false-label', () => {
    const wrapper = mount(() => <Checkbox
      v-model={checked}
      text='复选框'
      true-label='真文本'
      false-label='假文本'
    ></Checkbox>)
    expect(wrapper.find('.tiny-checkbox__original').attributes()['false-value']).toBe('假文本')
  })

  test('slot', () => {
    const wrapper = mount(() => <Checkbox
      label='复选框1'
      v-slots={{
        default: () => <span class="only-slot">复选框1</span>
      }}
    ></Checkbox>)
    expect(wrapper.find('.only-slot').exists()).toBe(true)
  })

  test.todo('checkbox-group 通过 checkbox-group 元素把多个 checkbox 元素管理为一组')
  test.todo('indeterminate 全选与半选')
  test.todo('min & max 可选数量限制')
  test.todo('checked 当前是否勾选')
  test.todo('checkbox-button 按钮形式复选框')
  test.todo('vertical 垂直布局')
  test.todo('复选框组所需数据可通过请求服务从后台取得，然后动态生成')
  test.todo('内容超出时的提示信息')
  test.todo('text 在text属性设置文本内容')
  test.todo('change 勾选值改变后将触发change事件')
  test.todo('多行按钮组，超出最大宽度后，换行显示')
})
