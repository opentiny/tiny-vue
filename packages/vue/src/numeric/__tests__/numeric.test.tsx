import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Numeric from '@opentiny/vue-numeric'
import { nextTick } from 'vue'

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

  test.todo('circulate 向上到达最大值后从最小值开始，或反过来')

  test.todo('mouse-wheel 设置鼠标滚动滑轮是否改变数值')

  test.todo('v-model 设置输入组件的默认值')

  test.todo('min 规定组件可输入的最小数值')

  test.todo('max 规定组件可输入的最大数值')

  test.todo('step 设置按上下方向键或点击上下按钮增减的数值')

  test.todo('step-strictly 是否只能输入 step 的倍数')

  test.todo('numeric-size 计数器尺寸')


  test.todo('disabled 是否禁用计数器')

  test.todo('controls 是否使用控制按钮')

  test.todo('controls-position 控制按钮位置')

  test.todo('name 原生属性')

  test.todo('label 输入框关联的label文字')

  test.todo('placeholder 设置输入框内的提示占位文本')

  test.todo('precision 数值精度')

  test.todo('format 数字格式化置项')

  test.todo('allow-empty 计数器内容的可清空')

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

  test.todo('blur 设置组件失去焦点时触发的回调函数')

  test.todo('change 设置组件的值变化时触发的回调函数')
})
