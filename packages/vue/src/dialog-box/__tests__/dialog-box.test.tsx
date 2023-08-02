import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import DialogBox from '@opentiny/vue-dialog-box'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('visible', () => {
    const visible = true
    const wrapper = mount(() =>  <DialogBox v-model:visible={visible}>
      <span>dialog-box内容</span>
    </DialogBox>)
    expect(wrapper.find('.tiny-dialog-box').exists()).toBe(true)
  })

  test.todo('center 弹出框的头部与底部内容是否自动居中')

  test.todo('is-form-reset 关闭弹窗，是否重置表单数据')

  test.todo('show-close 是否显示关闭按钮')

  test.todo('draggable 是否开启弹窗的拖拽功能')

  test.todo('fullscreen 弹出框是否全屏')

  test.todo('modal 是否启用遮罩层')

  test.todo('close-on-click-modal 是否可以通过点击遮罩层关闭弹窗')

  test.todo('close-on-press-escape 是否可以通过 ESC 键关闭遮罩层')

  test.todo('modal-append-to-body 遮罩层是否应用到body上')

  test.todo('append-to-body DialogBox本身是否插入到 body 上')

  test.todo('right-slide 是否开启弹出右侧滑出功能')

  test.todo('lock-scroll Dialog弹出时是否禁用滚动条')

  test.todo('show-header 是否显示弹窗头部 header')

  test.todo('width 弹出框的宽度')

  test.todo('dialog-class 自定义配置弹窗类名')

  /**
   * slots
   */
  test('default', () => {
    const visible = true
    const wrapper = mount(() =>  <DialogBox v-model:visible={visible}>
      <span class="custom-content">默认插槽内容</span>
    </DialogBox>)
    expect(wrapper.find('span.custom-content').exists()).toBe(true)
  })

  test.todo('title 窗口标题区的内容')

  test.todo('footer 窗口底部的模板')

  /**
   * events
   */
  test('close', async () => {
    let visible = true
    const handleClose = vi.fn()
    const wrapper = mount(() => <DialogBox v-model:visible={visible} onClose={handleClose}></DialogBox>)
    await wrapper.find('.tiny-dialog-box__headerbtn').trigger('click')
    await nextTick()
    expect(handleClose).toHaveBeenCalled()
  })

  test.todo('open 弹出框打开的回调')

  test.todo('opened 打开动画结束时的回调')

  test.todo('closed 关闭动画结束时的回调')

  test.todo('drag-start 拖拽开始事件')

  test.todo('drag-move 拖拽移动事件')

  test.todo('drag-end 拖拽结束事件')
})

