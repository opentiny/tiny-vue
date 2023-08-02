import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import Fullscreen from '@opentiny/vue-fullscreen'

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('render test & page-only', async () => {
    const wrapper = mount(() => <Fullscreen page-only={true}> </Fullscreen>)
    const tinyFullscreen = wrapper.findComponent({ name: 'TinyFullscreen' })
    expect(wrapper.find('.tiny-fullscreen').exists()).toBe(true)
    expect(tinyFullscreen.vm.state.isPageOnly).toBe(true)
  })

  test.todo('fullscreen ，组件式使用时，控制组件是否全屏显示。默认为 false')

  test.todo('teleport ，是否将目标元素移动到 body 下。true 为移动，false 为不移动。默认值为 false')

  test.todo('z-index ，在全屏显示时，目标元素的 zIndex')

  test.todo('fullscreen-class ，自定义组件 wrapper 的样式类名')

  test.todo('exit-on-click-wrapper ，组件式使用时，点击组件 wrapper 是否关闭全屏显示。默认为 true')

  //slots
  test('default', async () => {
    const wrapper = mount(() => (
      <Fullscreen>
        {{
          default: () => <div>全屏内容</div>
        }}
      </Fullscreen>
    ))
    const tinyFullscreen = wrapper.findComponent({ name: 'TinyFullscreen' })
    expect(wrapper.find('.tiny-fullscreen').exists()).toBe(true)
    expect(tinyFullscreen.vm.state.isPageOnly).toBe(true)
    expect(wrapper.find('.tiny-fullscreen').text()).toBe('全屏内容')
  })

  // events
  test.todo('测试 update:fullscreen 事件，组件式使用时，更新 fullscreen 属性')

  // methods
  test.todo('toggle ，函数式使用时，切换全屏模式')
})
