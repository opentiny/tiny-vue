import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect, vi } from 'vitest'
import Collapse from '@opentiny/vue-collapse'
import CollapseItem from '@opentiny/vue-collapse-item'

describe('PC Mode', () => {
  const mount = mountPcMode

  const wrapper = mount(() => (
    <Collapse modelValue="1">
      <CollapseItem title="标题" name="1">
        {{
          default: () => <span>面板内容1</span>
        }}
      </CollapseItem>
    </Collapse>
  ))

  // attrs
  test('render test & title', async () => {
    const tinyRate = wrapper.findComponent({ name: 'TinyRate' })
    expect(wrapper.find('.tiny-collapse').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-collapse-item').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-collapse-item__header').text()).toBe('标题')
    
  })

  test.todo('disabled ，禁用当前面板，默认值为false')

  test.todo('title-right, 自定义面板标题右侧内容')


  // slots
  test('default slot', async () => {
    expect(wrapper.find('.tiny-collapse-item').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-collapse-item__content').text()).toBe('面板内容1')
  })

  test.todo('icon 插槽，自定义当前面板展开折叠 icon 图标')

  test.todo('title 插槽，自定义面板标题，比如在标题前增加图标')
  
  test.todo('title-right 插槽，自定义面板标题右侧内容')
})
