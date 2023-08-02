import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import TimeSelect from '@opentiny/vue-time-select'
import { nextTick } from 'vue'
import { iconBoat } from '@opentiny/vue-icon'

let value = '18:00'

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('placeholder', async () => {
    const wrapper = mount(() => <TimeSelect v-model={value} placeholder="选择时间"></TimeSelect>)
    expect(wrapper.find('input').attributes().placeholder).toBe('选择时间')
  })

  test.todo('modelValue / v-model 绑定值')

  test.todo('disabled 禁用')

  test.todo('editable 文本框可输入')

  test.todo('clearable 是否显示清除按钮')

  test.todo('size 输入框尺寸;该属性的可选值为 medium,small, mini')

  test.todo('popper-class TimePicker 下拉框的 class 类名')

  test.todo('picker-options 当前时间日期选择器特有的选项参考下表')

  test.todo('default-value 可选，当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被new Date()解析的值')

  test.todo('name 原生属性')

  test.todo('suffix-icon 自定义头部图标')

  test.todo('clear-icon 自定义清空图标')

  test.todo('popper-append-to-body 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false')

/**
 * events
 */
  test('events', async () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    const wrapper = mount(() => <TimeSelect v-model={value} onFocus={handleFocus} onBlur={handleBlur} ></TimeSelect>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(handleFocus).toHaveBeenCalled()
    await document.querySelector('.tiny-time-select__item').click()
    await nextTick()
    expect(handleBlur).toHaveBeenCalled()
    expect(value).not.toBe('18:00')
  })

  test('icon', async () => {
    const wrapper = mount(() => <TimeSelect v-model={value} suffix-icon={iconBoat()}></TimeSelect>)
    expect(wrapper.find('.tiny-svg').exists()).toBe(true)
  })

  /**
   * methods
   */
  test.todo('focus 使 input 获取焦点')

  /**
   * events
   */
  test.todo('change 用户确认选定的值时触发')

})
