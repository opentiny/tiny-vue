import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Slider from '@opentiny/vue-slider'
import { nextTick, ref } from 'vue'

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

  test('min 设置最小值。', async () => {
    const value = ref(60)
    mount(() => <Slider v-model={value.value} min={50} />)

    await nextTick()
    value.value = 40
    await nextTick()
    expect(value.value).toBe(50)
    value.value = 120
    await nextTick()
    expect(value.value).toBe(100)
  })

  test('max 设置最大值。必需是整数，可以负数。必需大于所设置的最小值。', async () => {
    const value = ref(60)

    mount(() => <Slider v-model={value.value} min={-10} max={-5} />)

    await nextTick()
    expect(value.value).toBe(-5)
  })

  test('min 大于 max的时候报错', async () => {
    try {
      const value = ref(60)
      mount(() => <Slider v-model={value.value} min={10} max={5} />)
    } catch (error) {
      expect(error).to.be.an('error')
      expect(error.message).to.equal('Slider min should not be greater than max.')
    }
  })

  test.todo('step 设置滑块移动时，每步位移距离，必需是大于0的正整数。')

  test('show-input 是否显示输入框，仅在非范围选择时有效', async () => {
    const value = ref(60)
    const wrapper = mount(() => <Slider v-model={value.value} showInput={true} min={0} max={100} />)

    const input = wrapper.find('.tiny-slider__input input')
    expect(input.exists()).toBe(true)
    await input.setValue(110)
    expect(value.value).toBe(100)
  })

  test('show-percent 是否显示百分比，仅在show-input为true时有效', async () => {
    const value = ref(60)
    const wrapper = mount(() => <Slider v-model={value.value} showInput={true} showPercent={true} min={0} max={100} />)

    expect(wrapper.find('.tiny-slider__input span').text()).toBe('%')
  })

  test.todo('format-tooltip 格式化 tooltip message')

  test.todo('height Slider 高度')

  test.todo('value 设置单滑块的当前值，必需是整数或数组。;绑定值')

  test.todo(
    'num-pages 设置总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是(最大值-最小值)/分页数;该属性的可选值为 0'
  )

  test.todo('show-tip 是否显示 tooltip')

  /**
   * slots
   */
  test('slot', async () => {
    const wrapper = mount(() => (
      <Slider
        v-model={value}
        show-input={true}
        v-slots={{
          default: (slotScope) => <b class="onlyText">{slotScope.slotScope}%</b>
        }}></Slider>
    ))
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

  test.todo(
    'change 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）;arg:{Number|Array 滑块非范围选择时，是滑块当前值；滑块是范围选择时，是滑块当前值数组}'
  )

  test.todo(
    'Stop 设置滑块滑动结束时，触发该事件;arg:{Number|Array 滑块非范围选择时，是滑块当前值；滑块是范围选择时，是滑块当前值数组}'
  )
})
