import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import TimeSelect from '@opentiny/vue-time-select'
import { nextTick, ref } from 'vue'
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

  test('modelValue / v-model 绑定值', async () => {
    const value = ref('10:00')
    const wrapper = mount(() => <TimeSelect v-model={value.value} placeholder="选择时间"></TimeSelect>)
    await nextTick()
    expect(wrapper.find('input').attributes().title).toBe('10:00')

    value.value = '10:30'
    await nextTick()

    expect(wrapper.find('input').attributes().title).toBe('10:30')
  })

  test('disabled 禁用', async () => {
    const disabled = ref(false)
    const wrapper = mount(() => <TimeSelect v-model={value} disabled={disabled.value}></TimeSelect>)
    expect(wrapper.findComponent({ name: 'TinyInput' }).props().disabled).toBe(undefined)

    disabled.value = true
    await nextTick()
    expect(wrapper.findComponent({ name: 'TinyInput' }).props().disabled).toBe(true)
  })

  test('editable 文本框可输入', async () => {
    const value = ref('16:00')
    const editable = ref(false)
    const wrapper = mount(() => <TimeSelect v-model={value.value} editable={editable.value}></TimeSelect>)

    expect(wrapper.find('input').attributes()).toHaveProperty('readonly')

    editable.value = true
    await nextTick()

    expect(wrapper.find('input').attributes('readonly')).toBeUndefined()
  })

  test.todo('editable 文本框可输模式下，当输入内容不符号格式的时候自动格式化')

  test('clearable 是否显示清除按钮', async () => {
    const value = ref('16:00')
    const wrapper = mount(() => <TimeSelect v-model={value.value}></TimeSelect>)

    const input = wrapper.findComponent({ name: 'TinyInput' })
    await input.trigger('mouseenter')
    expect(wrapper.find('.baseClearicon').exists()).toBe(true)
  })

  test('size 输入框尺寸;该属性的可选值为 medium,small, mini', async () => {
    const wrapperMedium = mount(() => <TimeSelect size="medium"></TimeSelect>)
    expect(wrapperMedium.find('.tiny-input-medium').exists()).toBe(true)

    const wrapperSmall = mount(() => <TimeSelect size="small"></TimeSelect>)
    expect(wrapperSmall.find('.tiny-input-small').exists()).toBe(true)

    const wrapperMini = mount(() => <TimeSelect size="mini"></TimeSelect>)
    expect(wrapperMini.find('.tiny-input-mini').exists()).toBe(true)
  })

  test('popper-class TimePicker 下拉框的 class 类名', async () => {
    const wrapper = mount(() => <TimeSelect v-model={value} popperClass="mystyle"></TimeSelect>)
    await nextTick()

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')

    await nextTick()

    expect(document.querySelector('.mystyle')).toBeDefined()
  })

  test('picker-options 当前时间日期选择器特有的选项', async () => {
    const wrapper = mount(() => (
      <TimeSelect
        pickerOptions={{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime: '09:00',
          maxTime: '14:30'
        }}></TimeSelect>
    ))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()

    const disabledTimeOptions = document.querySelectorAll('.disabled')
    expect(disabledTimeOptions[0].textContent).toBe('08:30')
    expect(disabledTimeOptions[3].textContent).toBe('14:30')
    expect(disabledTimeOptions[disabledTimeOptions.length - 1].textContent).toBe('18:30')
  })

  test('default-value 可选，当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被new Date()解析的值', async () => {
    const value = ref('09:00')
    const wrapper = mount(() => <TimeSelect defaultValue={value.value}></TimeSelect>)

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')

    await nextTick()
    expect(document.querySelector('.selected.default')).toBeDefined()
    expect(document.querySelector('.selected.default')?.textContent).toBe(value.value)
  })

  test('name 原生属性', async () => {
    const wrapper = mount(() => <TimeSelect name="name" />)
    expect(wrapper.find('input').attributes('name')).toBe('name')
  })

  test('suffix-icon 自定义头部图标', async () => {
    const wrapper = mount(() => <TimeSelect v-model={value} suffix-icon={iconBoat()}></TimeSelect>)
    expect(wrapper.findComponent({ name: 'TinyIconBoat' }).exists()).toBe(true)
  })

  test('clear-icon 自定义清空图标', async () => {
    const wrapper = mount(() => <TimeSelect v-model={value} clear-icon={iconBoat()}></TimeSelect>)

    const input = wrapper.findComponent({ name: 'TinyInput' })
    await input.trigger('mouseenter')

    expect(wrapper.findComponent({ name: 'TinyIconBoat' }).exists()).toBe(true)
  })

  test('popper-append-to-body 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false', async () => {
    const wrapper = mount(() => <TimeSelect popper-append-to-body={false}></TimeSelect>)

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()

    expect(wrapper.find('.tiny-date-container .tiny-picker-panel').exists()).toBe(true)
  })

  /**
   * events
   */
  test('focus and blur events', async () => {
    const value = ref('09:00')
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    const wrapper = mount(() => (
      <TimeSelect v-model={value.value} onFocus={handleFocus} onBlur={handleBlur}></TimeSelect>
    ))
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(handleFocus).toHaveBeenCalled()

    const timeOptions = wrapper.findAll('.tiny-time-select__item').at(3)
    expect(timeOptions?.exists()).toBe(true)
    timeOptions?.trigger('click')
    await nextTick()

    expect(handleBlur).toHaveBeenCalled()

    expect(value.value).not.toBe('09:00')
  })

  /**
   * methods
   */
  test('focus 使 input 获取焦点', async () => {
    const wrapper = mount(() => <TimeSelect />, {
      attachTo: document.body
    })

    await wrapper.findComponent(TimeSelect).vm.focus()

    await nextTick()
    expect(wrapper.find('.tiny-time-select.tiny-popper').exists()).toBe(true)
  })

  /**
   * events
   */
  test('change 用户确认选定的值时触发', async () => {
    const value = ref('10:00')
    const handleChange = vi.fn()
    const wrapper = mount(() => <TimeSelect v-model={value.value} onChange={handleChange}></TimeSelect>)

    value.value = '11:00'

    await nextTick()

    expect(handleChange).toBeCalledTimes(1)

    const inputEl = wrapper.find('input')
    await inputEl.trigger('focus')
    await nextTick()
    inputEl.setValue('09:00')
    await nextTick()
    expect(value.value).toBe('09:00')
    expect(handleChange).toBeCalledTimes(2)

    const timeOptions = wrapper.findAll('.tiny-time-select__item').at(3)
    expect(timeOptions?.exists()).toBe(true)
    timeOptions?.trigger('click')
    expect(value.value).not.toBe('09:00')
    await nextTick()
    expect(handleChange).toBeCalledTimes(3)
  })
})
