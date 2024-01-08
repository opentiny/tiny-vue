import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import Tag from '@opentiny/vue-tag'
import { describe, expect, test, vi } from 'vitest'
import { iconTime } from '@opentiny/vue-icon'
import { nextTick } from 'vue'

const IconTime = iconTime()

describe('PC Mode', () => {
  const mount = mountPcMode
  // props
  test('hit 是否有边框描边', async () => {
    const wrapper = mount(() => <Tag hit={true}>标签</Tag>)
    const tinyTag = wrapper.findComponent({ name: 'TinyTag' })
    expect(wrapper.find('.tiny-tag').exists()).toBeTruthy()
    expect(tinyTag.vm.hit).toBe(true)
  })

  // slots
  test('default 标签内容', async () => {
    const wrapper = mount(() => (
      <Tag hit={true}>
        <IconTime />
        标签
      </Tag>
    ))
    expect(wrapper.find('.tiny-svg').exists()).toBeTruthy()
  })

  // events
  test('close 关闭 Tag 时触发的事件', async () => {
    const handleClose = vi.fn()
    const wrapper = mount(() => (
      <Tag closable={true} onClose={handleClose}>
        标签
      </Tag>
    ))
    await nextTick()
    await wrapper.find('.tiny-tag__close').trigger('click')
    expect(handleClose).toBeCalled()
  })

  // props
  test('closable 是否可关闭', async () => {
    const wrapper = mount(() => <Tag closable>标签</Tag>)
    await nextTick()
    expect(wrapper.find('.tiny-tag__close').exists()).toBeTruthy()
  })

  // color 颜色
  test('color 颜色', async () => {
    const rgbColor = 'rgb(64, 158, 255)'
    const wrapper = mount(() => <Tag color={rgbColor}>标签</Tag>)
    await nextTick()
    expect(wrapper.find('.tiny-tag').attributes().style).contains(`background-color: ${rgbColor}`)
  })

  // type 显示类型; 该属性的可选值为 success / info / warning / danger
  test.each([
    ['success', 'success type should have the proper class'],
    ['info', 'info type should have the proper class'],
    ['warning', 'warning type should have the proper class'],
    ['danger', 'danger type should have the proper class']
  ])('type %s', async (type, _description) => {
    const wrapper = mount(() => <Tag type={type}>标签</Tag>)
    await nextTick()
    expect(wrapper.find(`.tiny-tag--${type}`).exists()).toBe(true)
  })

  // size 尺寸; 该属性的可选值为 medium / small / mini
  test.each([
    ['medium', 'medium size should have the proper class'],
    ['small', 'small size should have the proper class'],
    ['mini', 'mini size should have the proper class']
  ])('size %s', async (size, _description) => {
    const wrapper = mount(() => <Tag size={size}>标签</Tag>)
    await nextTick()
    expect(wrapper.find(`.tiny-tag--${size}`).exists()).toBe(true)
  })

  // effect 主题; 该属性的可选值为 dark / light / plain
  test.each([
    ['dark', 'dark effect should have the proper class'],
    ['light', 'light effect should have the proper class'],
    ['plain', 'plain effect should have the proper class']
  ])('effect %s', async (effect, _description) => {
    const wrapper = mount(() => <Tag effect={effect}>标签</Tag>)
    await nextTick()
    expect(wrapper.find(`.tiny-tag--${effect}`).exists()).toBe(true)
  })

  test('disabled 是否禁用', async () => {
    const wrapper = mount(() => <Tag disabled>标签</Tag>)
    await nextTick()
    expect(wrapper.find('.is-disabled').exists()).toBeTruthy()
  })

  // events
  test('click 点击 Tag 时触发的事件;event: 原生事件', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() => <Tag onClick={handleClick}>标签</Tag>)
    await nextTick()
    await wrapper.find('.tiny-tag').trigger('click')
    expect(handleClick).toBeCalled()
  })
})
