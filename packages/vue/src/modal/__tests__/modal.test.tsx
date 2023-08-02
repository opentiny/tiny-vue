import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Modal from '@opentiny/vue-modal'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('v-model', async () => {
    let show = true
    const wrapper = mount(() => <Modal v-model={show}></Modal>)
    expect(wrapper.find('.tiny-modal__wrapper').isVisible()).toBe(true)
  })

  test.todo('id 弹窗唯一ID')

  test.todo('is-form-reset 关闭弹窗，是否重置表单数据')

  test.todo('title 窗口的标题')

  test.todo('type 窗口类型')

  test.todo('status 消息状态')

  test.todo('message 窗口的内容')

  test.todo('show-header 是否显示头部')

  test.todo('show-footer 是否显示底部')

  test.todo('lock-view 是否锁住页面，不允许窗口之外的任何操作')

  test.todo('lock-scroll 是否锁住滚动条，不允许页面滚动')

  test.todo('mask 是否显示遮罩层')

  test.todo('mask-closable 是否允许点击遮罩层关闭窗口')

  test.todo('esc-closable 是否允许按Esc键关闭窗口')

  test.todo('resize 是否允许拖动调整窗口大小')

  test.todo('duration 只对 type=message 有效，自动关闭的延时')

  test.todo('width 窗口的宽度')

  test.todo('height 窗口的高度')

  test.todo('min-width 窗口的最小宽度')

  test.todo('min-height 窗口的最小高度')

  test.todo('top 消息距离顶部的位置')

  test.todo('z-index 自定义堆叠顺序')

  test.todo('fullscreen 是否最大化显示')

  test.todo('message-closable message信息是否显示关闭按钮')

  /**
   * slots
   */
  test('default', () => {
    let show = true
    const wrapper = mount(() =><Modal v-model={show}  v-slots={{
      default: () => <span class="custom-content">默认插槽-自定义内容</span>
    }}>
    </Modal>)
    expect(wrapper.find('span.custom-content').isVisible()).toBe(true)
  })

  test.todo('footer 窗口底部的模板')

  /**
   * events
   */
  test('show', async () => {
    let show = true
    const handleShow = vi.fn()
    const wrapper = mount(() => <Modal v-model={show} onShow={handleShow}></Modal>)
    await nextTick()
    expect(handleShow).toHaveBeenCalled()
  })

  test.todo('hide 在窗口关闭时触发的事件')

  test.todo('confirm 点击关闭按钮时触发的事件')

  test.todo('cancel 点击取消按钮时触发的事件')

  test.todo('zoom 窗口缩放时触发的事件')
})

