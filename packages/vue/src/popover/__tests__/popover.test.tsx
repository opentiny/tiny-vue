import { mountPcMode as mount } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Button from '@opentiny/vue-button'
import Popover from '@opentiny/vue-popover'

describe('PC Mode', () => {
  document.body.innerHTML = `
  <div>
    <div id="app"></div>
  </div>
`
  // attrs
  test('trigger 触发方式', async () => {
    const wrapper = mount(
      () => (
        <Popover placement="top-start" title="标题" width="200" trigger="hover" append-to-body content="这是一段内容">
          {{
            reference: () => <Button>悬浮我提示</Button>
          }}
        </Popover>
      ),
      {
        attachTo: '#app'
      }
    )
    await wrapper.find('button').trigger('mouseenter')

    expect(document.querySelector('body > .tiny-popover .tiny-popover__title')?.textContent).toBe('标题')
  })

  test.todo('title 标题')

  test.todo('content 显示的内容，也可以通过 slot 传入 DOM')

  test.todo('width 宽度')

  test.todo('height 高度')

  test.todo('placement 出现位置')

  test.todo('disabled  是否可用')

  test.todo('modelValue 状态是否可见')

  test.todo('offset 出现位置的偏移量')

  test.todo('arrow-offset 箭头的位置偏移')

  test.todo('transform-origin 组件的旋转中心点 ')

  test.todo('append-to-body 是否添加到body上')

  test.todo('transition 定义渐变动画')

  test.todo('visible-arrow 是否显示 Tooltip 箭头')

  test.todo('popper-options popper.js 的参数')

  test.todo('popper-class 为 popper 添加类名')

  test.todo('open-delay 触发方式为 hover 时的显示延迟，单位为毫秒')

  test.todo('close-delay 触发方式为 hover 时的隐藏延迟，单位为毫秒')

  // slots
  test.todo('default Popover 内嵌 HTML 文本')

  test.todo('reference 触发 Popover 显示的 HTML 元素')

  // events
  test.todo('show 显示时触发')

  test.todo('hide 隐藏时触发')

  test.todo('after-enter 显示动画播放完毕后触发')

  test.todo('after-leave 隐藏动画播放完毕后触发')
})
