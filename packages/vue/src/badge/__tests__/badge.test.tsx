import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import Badge from '@opentiny/vue-badge'
import { describe, expect, test } from 'vitest'

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
    const wrapper = mount(() => (
      <Badge type="danger" value={num}>
        {text}
      </Badge>
    ))
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual(String(num))
    expect(wrapper.find('.tiny-badge').classes()).toContain('tiny-badge--danger')
  })

  test('is-dot', () => {
    const wrapper = mount(() => <Badge is-dot={true}>小圆点显示</Badge>)
    expect(wrapper.find('.tiny-badge').classes()).toContain('tiny-badge--default')
  })

  test('max', () => {
    const wrapper = mount(() => (
      <Badge max={2} value={5}>
        小圆点显示
      </Badge>
    ))
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual('2+')
  })

  test('content slot', () => {
    const wrapper = mount(() => (
      <Badge
        value={5}
        v-slots={{
          content: () => <div class="badge__content">自定义</div>
        }}
      >
        自定义内容插槽
      </Badge>
    ))
    expect(wrapper.find('.badge__content').text()).toEqual('自定义')
  })

  test('href', () => {
    const num = 1
    const text = '跳转链接'
    const wrapper = mount(() => <Badge value={num} href={"/"}>{text}</Badge>)
    expect(wrapper.find('.tiny-badge a').exists()).toBe(true)
  })


  test('default slot', () => {
    const wrapper = mount(() => {
      return (
        <Badge
          value={1}
          v-slots={{
            default: () => <div class="badge__default__slot">插槽内容</div>
          }}
        ></Badge>
      )
    })
    expect(wrapper.find('.badge__default__slot').exists()).toBe(true)
    expect(wrapper.find('.badge__default__slot').text()).toEqual('插槽内容')
  })

  test('dynamic hidden', async () => {
    const wrapper = mount(Badge, {
      props: {
        value: 2,
        hidden: false
      },
      slots: {
        default: () => <div class="badge__default__slot">我的待办</div>
      },
    })

    expect(wrapper.find('.tiny-badge').exists()).toBe(true)
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual('2')
    expect(wrapper.find('.badge__default__slot').text()).toEqual('我的待办')

    await wrapper.setProps({ value: 1 })
    await wrapper.setProps({ hidden: 1 === 0 })
    expect(wrapper.find('.tiny-badge').exists()).toBe(true)
    expect(wrapper.find('.tiny-badge__content-text').text()).toEqual('1')

    await wrapper.setProps({ value: 0 })
    await wrapper.setProps({ hidden: 0 === 0 })
    expect(wrapper.find('.tiny-badge').exists()).toBe(false)
  })
})
