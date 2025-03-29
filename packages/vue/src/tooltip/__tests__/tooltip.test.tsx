import { mountPcMode as mount } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Tooltip from '@opentiny/vue-tooltip'

describe('PC Mode', () => {
  document.body.innerHTML = `
  <div>
    <div id="app"></div>
  </div>
`
  // attrs
  test('effect 默认提供的主题', async () => {
    const wrapper = mount(
      () => (
        <Tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <button>上左</button>
        </Tooltip>
      ),
      {
        attachTo: '#app'
      }
    )
    await wrapper.find('button').trigger('mouseenter')

    expect(document.querySelector('body .tiny-tooltip')).toBeTruthy()
  })

  test.todo('type 默认提供的类型')
  test.todo('content 显示的内容')
  test.todo('append-to-body 是否添加到body上')

  test.todo('placement Tooltip 的出现位置')
  test.todo('modelValue 状态是否可见')
  test.todo('disabled  是否可用')
  test.todo('offset 出现位置的偏移量')
  test.todo('transition 定义渐变动画')
  test.todo('visible-arrow 是否显示 Tooltip 箭头')
  test.todo('popper-options popper.js 的参数')
  test.todo('open-delay 延迟出现，单位毫秒')
  test.todo('manual 手动控制模式')
  test.todo('visible 提示的智能出现的模式')
  test.todo('popper-class 为 Tooltip 的 popper 添加类名')
  test.todo('enterable 鼠标是否可进入到 tooltip 中')
  test.todo('hide-after Tooltip 出现后自动隐藏延时')
  test.todo('tabindex 配置该元素，配置的属性会自动添加到该组件的触发原上')
  test.todo('renderContent 自定义渲染函数')
  // slots
  test.todo('default 默认插槽')
  test.todo('content 内容')
})
