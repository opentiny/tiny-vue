import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import DropTimes from '@opentiny/vue-drop-times'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('modelValue / v-model', () => {
    let value = '10:00'
    const wrapper = mount(() => <DropTimes v-model={value}></DropTimes>)
    expect(wrapper.find('.tiny-input__inner').isVisible()).toBe(true)
  })

  test.todo('size 设置组件大小')

  test.todo('popper-class 为 DropTimes 下拉弹框添加的 class 类名')

  test.todo('popper-append-to-body 是否将弹出框插入至 body 元素')

  test.todo('placeholder 设置输入框内的提示占位文本')

  test.todo('end 结束时间，以分钟计算，默认值为 1440。')

  test.todo('start 开始时间，以分钟计算，默认值为 0。')

  test.todo('step 间隔时间，以分钟计算，默认值为 15。')

  /**
   * events
   */
  test('change', async () => {
    const handleChange = vi.fn()
    let value = '12:00'
    const wrapper = mount(() => <DropTimes modelValue={value} onChange={handleChange}></DropTimes>)
    await wrapper.trigger('click')
    const option = document.querySelector(".tiny-drop-times .tiny-select-dropdown__wrap li:first-child")
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
    option?.dispatchEvent(event)
    await nextTick()
    expect(handleChange).toHaveBeenCalled()
  })
})
