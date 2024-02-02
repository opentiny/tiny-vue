import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Numeric from '@opentiny/vue-numeric'
import { IconChevronUp } from '@opentiny/vue-icon'
import { nextTick, ref } from 'vue'

const mouseup = new Event('mouseup')
let value = 1

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('size', async () => {
    const wrapper = mount(() => <Numeric v-model={value} size="medium"></Numeric>)
    expect(wrapper.find('.tiny-input-medium').exists()).toBe(true)
  })

  test('circulate 向上到达最大值后从最小值开始，或反过来', async () => {
    const value = ref(0)
    const min = ref(0)
    const max = ref(5)

    const wrapper = mount(() => (
      <Numeric v-model={value.value} min={min.value} max={max.value} circulate={true}></Numeric>
    ))
    expect(wrapper.find('.tiny-numeric__decrease').exists()).toBe(true)
    wrapper.find('.tiny-numeric__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    expect(value.value).toBe(5)

    await nextTick()

    wrapper.find('.tiny-numeric__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    expect(value.value).toBe(0)
  })

  test('mouse-wheel 设置鼠标滚动滑轮是否改变数值', async () => {
    const value = 1
    const inputValue = ref(1)
    const wrapper = mount(() => <Numeric v-model={inputValue.value} mouse-wheel={true}></Numeric>)

    wrapper.find('input').trigger('focus')
    await nextTick()

    wrapper.find('input').trigger('mousewheel', { wheelDelta: -150 })
    await nextTick()
    expect(Number(wrapper.find('input').element.value)).toBeLessThan(value)

    inputValue.value = value

    await nextTick()
    wrapper.find('input').trigger('mousewheel', { wheelDelta: 150 })
    await nextTick()
    expect(Number(wrapper.find('input').element.value)).toBeGreaterThan(value)
  })

  test('v-model 设置输入组件的默认值', async () => {
    const inputValue = ref(1)
    const wrapper = mount(() => <Numeric v-model={inputValue.value}></Numeric>)
    expect(wrapper.find('input').element.value).toEqual('1')
  })

  test('min 规定组件可输入的最小数值', async () => {
    const inputValue = ref(1)
    const wrapper = mount(() => <Numeric v-model={inputValue.value} min={3}></Numeric>)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
    wrapper.find('.tiny-numeric__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
  })

  test('max 规定组件可输入的最大数值', async () => {
    const inputValue = ref(6)
    const wrapper = mount(() => <Numeric v-model={inputValue.value} max={3}></Numeric>)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
    wrapper.find('.tiny-numeric__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
  })

  test('step 按上下按钮增减数值', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric v-model={num.value} step={2}></Numeric>)
    wrapper.find('.tiny-numeric__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('-2')
    wrapper.find('.tiny-numeric__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
    wrapper.find('.tiny-numeric__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('2')
  })

  test('step 按上下方向键增减数值', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric v-model={num.value}></Numeric>)
    wrapper.find('input').element.focus()
    await nextTick()

    wrapper.find('input').trigger('keydown.up')
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('1')

    wrapper.find('input').trigger('keydown.down')
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
  })

  test('step-strictly 是否只能输入 step 的倍数', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric step-strictly={true} step={2} v-model={num.value}></Numeric>)
    await wrapper.find('input').setValue(3)
    expect(wrapper.find('input').element.value).toEqual('4')
  })

  test('numeric-size 计数器尺寸', async () => {
    const num = ref(0)
    // mini size
    let wrapper = mount(() => <Numeric size="mini" v-model={num.value}></Numeric>)
    expect(wrapper.find('.tiny-numeric--mini').exists()).toBe(true)
    expect(wrapper.find('.tiny-input-mini').exists()).toBe(true)
    await nextTick()

    // small size
    wrapper = mount(() => <Numeric size="small" v-model={num.value}></Numeric>)
    expect(wrapper.find('.tiny-numeric--small').exists()).toBe(true)
    expect(wrapper.find('.tiny-input-small').exists()).toBe(true)
    await nextTick()

    // medium size
    wrapper = mount(() => <Numeric size="medium" v-model={num.value}></Numeric>)
    expect(wrapper.find('.tiny-numeric--medium').exists()).toBe(true)
    expect(wrapper.find('.tiny-input-medium').exists()).toBe(true)
    await nextTick()
  })

  test('disabled 是否禁用计数器', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric disabled={true} v-model={num.value}></Numeric>)
    wrapper.find('.tiny-numeric__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
    wrapper.find('.tiny-numeric__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
  })

  test('controls 是否使用控制按钮', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric controls={false} v-model={num.value}></Numeric>)
    expect(wrapper.find('.tiny-numeric__decrease').exists()).toBe(false)
    expect(wrapper.find('.tiny-numeric__increase').exists()).toBe(false)
  })

  test('controls-position 控制按钮位置', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric controls-position="rigint" v-model={num.value}></Numeric>)
    expect(wrapper.find('.tiny-numeric__decrease').findComponent(IconChevronUp).exists()).toBe(false)
    expect(wrapper.find('.tiny-numeric__increase').findComponent(IconChevronUp).exists()).toBe(false)
  })

  test('name 原生属性', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric name="name" v-model={num.value}></Numeric>)
    expect(wrapper.find('input').element.name).toEqual('name')
  })

  test('label 输入框关联的label文字', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric label="label" v-model={num.value}></Numeric>)
    expect(wrapper.find('input').attributes('aria-label')).toEqual('label')
  })

  test('placeholder 设置输入框内的提示占位文本', async () => {
    const num = ref(0)
    const wrapper = mount(() => <Numeric placeholder="please input" v-model={num.value}></Numeric>)
    expect(wrapper.find('input').element.placeholder).toEqual('please input')
  })

  test('precision 数值精度为2', async () => {
    const num = ref(1.1111111111)
    const wrapper = mount(() => <Numeric v-model={num.value} precision={2}></Numeric>)
    expect(wrapper.find('input').element.value).toEqual('1.11')

    num.value = 17.275
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('17.28')

    num.value = 17.274
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('17.27')

    num.value = 17
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('17.00')

    num.value = 17.5
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('17.50')
  })

  test('precision 数值精度为3', async () => {
    const num = ref(1.5)
    const wrapper = mount(() => <Numeric v-model={num.value} precision={3}></Numeric>)
    expect(wrapper.find('input').element.value).toEqual('1.500')
  })

  test.todo('format 数字格式化置项')

  test('allow-empty 计数器内容的可清空', async () => {
    const num = ref(0)
    // allow-empty = false
    let wrapper = mount(() => <Numeric v-model={num.value}></Numeric>)
    wrapper.find('input').setValue('')
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')

    // allow-empty = true
    wrapper = mount(() => <Numeric allow-empty v-model={num.value}></Numeric>)
    wrapper.find('input').setValue('')
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('')
  })

  /**
   * events
   */
  test('focus', async () => {
    const focus = vi.fn()
    const wrapper = mount(() => <Numeric v-model={value} onFocus={focus}></Numeric>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(focus).toHaveBeenCalled()
  })

  test('blur 设置组件失去焦点时触发的回调函数', async () => {
    const blur = vi.fn()
    const wrapper = mount(() => <Numeric v-model={value} onBlur={blur}></Numeric>)
    await wrapper.find('input').trigger('blur')
    await nextTick()
    expect(blur).toHaveBeenCalled()
  })

  test('change 设置组件的值变化时触发的回调函数', async () => {
    const num = ref(1)
    const change = vi.fn()
    const wrapper = mount(() => <Numeric v-model={num.value} onChange={change}></Numeric>)

    num.value = 2
    await nextTick()
    expect(change).toHaveBeenCalledTimes(1)
    expect(change).toHaveBeenCalledWith(2, 1)

    wrapper.find('.tiny-numeric__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(change).toHaveBeenCalledTimes(2)
    expect(change).toHaveBeenCalledWith(1, 2)

    wrapper.find('.tiny-numeric__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(change).toHaveBeenCalledTimes(3)
    expect(change).toHaveBeenCalledWith(2, 1)
  })
})
