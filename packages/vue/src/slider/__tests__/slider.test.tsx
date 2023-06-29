import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Slider from '@opentiny/vue-slider'
import { nextTick } from 'vue'


let value = 40

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('vertical', async () => {
    const wrapper = mount(() => <Slider v-model={value} vertical={true}></Slider>)
    expect(wrapper.find('.tiny-slider__vertical').exists()).toBe(true)
  })

  test.todo('disabled 是否禁用')

  test.todo('min 设置最小值。')

  test.todo('max 设置最大值。必需是整数，可以负数。必需大于所设置的最小值。')

  test.todo('step 设置滑块移动时，每步位移距离，必需是大于0的正整数。')

  test.todo('show-input 是否显示输入框，仅在非范围选择时有效')

  test.todo('format-tooltip 格式化 tooltip message')

  test.todo('height Slider 高度')

  test.todo('value 设置单滑块的当前值，必需是整数或数组。;绑定值')

  test.todo('num-pages 设置总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是(最大值-最小值)/分页数;该属性的可选值为 0')

  test.todo('show-tip 是否显示 tooltip')

  /**
   * slots
   */
  test('slot', async () => {
    const wrapper = mount(() => <Slider v-model={value} show-input={true} v-slots={{
      default: (slotScope) => <b class="onlyText">{slotScope.slotScope}%</b>
    }}></Slider>)
    expect(wrapper.find('.onlyText').text()).toBe(`${value}%`)
  })

  /**
   * events
   */
  test('events', async () => {
    const mousedown = vi.fn()
    const wrapper = mount(() => <Slider v-model={value} onStart={mousedown}></Slider>)
    await wrapper.find('.tiny-slider__handle').trigger('mousedown')
    await nextTick()
    expect(mousedown).toHaveBeenCalled()
  })

  test.todo('change 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）;arg:{Number|Array 滑块非范围选择时，是滑块当前值；滑块是范围选择时，是滑块当前值数组}')

  test.todo('Stop 设置滑块滑动结束时，触发该事件;arg:{Number|Array 滑块非范围选择时，是滑块当前值；滑块是范围选择时，是滑块当前值数组}')
})
