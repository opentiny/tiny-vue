import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Badge from '@opentiny/vue-badge'

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('base', () => {
    const num = 5
    const text = '我的代办'
    const wrapper = mount(() => <Badge value={num}>{text}</Badge>)
    expect(wrapper.find('.tiny-badge').exists()).toBe(true)
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual(String(num))
  })

  test('type & value', () => {
    const num = 2
    const text = 'danger 类型'
    const wrapper = mount(() => <Badge type='danger' value={num}>{text}</Badge>)
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual(String(num))
    expect(wrapper.find('.tiny-badge').classes()).toContain('tiny-badge--danger')
  })

  test('is-dot', () => {
    const wrapper = mount(() => <Badge is-dot={true}>小圆点显示</Badge>)
    expect(wrapper.find('.tiny-badge').classes()).toContain('tiny-badge--default')
  })

  test('max', () => {
    const wrapper = mount(() => <Badge max={2} value={5}>小圆点显示</Badge>)
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual('2+')
  })

  test('content slot', () => {
    const wrapper = mount(() => <Badge
      value={5}
      v-slots={{
        content: () => <div class="badge__content">自定义</div>
      }}
    >自定义内容插槽</Badge>)
    expect(wrapper.find('.badge__content').text()).toEqual('自定义')
  })

  test.todo('href 跳转链接')
  test.todo('default slot 默认插槽自定义标记内容')
  test.todo('hidden 消息已读动态隐藏标记')
})
