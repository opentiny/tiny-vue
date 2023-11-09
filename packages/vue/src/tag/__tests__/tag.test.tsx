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
  test.todo('closable 是否可关闭')

  test.todo('color 颜色，支持 rgb,rgba,hex 三种格式;背景色')

  test.todo('type 显示类型;该属性的可选值为 success / info / warning / danger')

  test.todo('size 尺寸;该属性的可选值为 medium / small / mini')

  test.todo('effect 主题;该属性的可选值为 dark / light / plain')

  test.todo('disabled 是否禁用')

  // events
  test.todo('click 点击 Tag 时触发的事件;event: 原生事件')
})
