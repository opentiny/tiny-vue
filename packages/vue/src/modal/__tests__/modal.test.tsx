import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Modal from '@opentiny/vue-modal'
import Form from '@opentiny/vue-form'
import FormItem from '@opentiny/vue-form-item'
import Input from '@opentiny/vue-input'
import { nextTick, reactive, ref } from 'vue'

const ASYNC_WAIT_TIME = 500

const waitAsyncFunctionEnded = (time = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ASYNC_WAIT_TIME + time))
}

describe('PC Mode', () => {
  const mount = mountPcMode

  /**
   * attrs
   */
  test('v-model', async () => {
    let show = true
    const wrapper = mount(() => <Modal v-model={show}></Modal>)
    expect(wrapper.find('.tiny-modal__wrapper').isVisible()).toBe(true)
    wrapper.unmount()
  })

  test('id', async () => {
    const handleClick = async () => {
      Modal.message({
        id: 'unique',
        message: 'no repeat'
      })
    }

    const wrapper = mount(() => <button onClick={handleClick}>open</button>)

    for (let i = 0; i < 5; i++) {
      await wrapper.find('button').trigger('click')
    }

    expect(document.querySelectorAll('.tiny-modal__wrapper').length).toEqual(1)
  })

  test('is-form-reset', async () => {
    const visible = ref(true)
    const form = reactive({
      name: ''
    })

    const handleClick = () => {
      visible.value = false
    }

    const wrapper = mount(() => (
      <div>
        <button onClick={handleClick}>close modal</button>
        <Modal v-model={visible.value} isFormReset={true}>
          <Form model={form}>
            <FormItem prop="name">
              <Input v-model={form.name} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    ))

    form.name = 'Im TinyVue'
    await wrapper.find('button').trigger('click')

    expect(form.name).toEqual('')

    wrapper.unmount()
  })

  test('title', () => {
    let visible = true
    const title = 'modal title'

    const wrapper = mount(() => <Modal v-model={visible} title={title}></Modal>)

    expect(wrapper.find('.tiny-modal__title').text()).toEqual(title)

    wrapper.unmount()
  })

  test('type alert', () => {
    const message = 'alert content'
    let visible = true

    const wrapper = mount(() => <Modal v-model={visible} type="alert" message={message}></Modal>)

    expect(wrapper.find('.tiny-modal__text').text()).toEqual(message)

    wrapper.unmount()
  })

  test('type confirm', () => {
    const message = 'confirm content'
    let visible = true

    const wrapper = mount(() => <Modal v-model={visible} type="confirm" message={message}></Modal>)

    expect(wrapper.find('.tiny-modal__text').text()).toEqual(message)

    wrapper.unmount()
  })

  test('show-header', () => {
    let visible = true

    const wrapper = mount(() => <Modal v-model={visible} showHeader={false}></Modal>)

    expect(wrapper.find('.tiny-modal__header').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('show-footer', () => {
    let visible = true

    const wrapper = mount(() => <Modal v-model={visible} showFooter={false}></Modal>)

    expect(wrapper.find('.tiny-modal__footer').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('lock-view, lock-scroll, mask', () => {
    let visible = true

    const wrapper = mount(() => <Modal v-model={visible} lockView={true} lockScroll={true} mask={true}></Modal>)

    expect(wrapper.find('.lock__view').exists()).toBeTruthy()
    expect(wrapper.find('.lock__scroll').exists()).toBeTruthy()
    expect(wrapper.find('.is__mask').exists()).toBeTruthy()

    wrapper.unmount()
  })

  test('mask-closable', async () => {
    let visible = true
    const fn = vi.fn()

    const wrapper = mount(() => <Modal v-model={visible} maskClosable={true} onHide={fn}></Modal>)

    await wrapper.find('.tiny-modal').trigger('click')

    // wait modal inside setTimeout (api.close())
    await waitAsyncFunctionEnded()

    expect(fn).toHaveBeenCalled()

    wrapper.unmount()
  })

  test('esc-closable', async () => {
    let visible = true
    const fn = vi.fn()

    const wrapper = mount(() => <Modal v-model={visible} escClosable={true} onHide={fn}></Modal>)

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        keyCode: 27
      })
    )

    // wait modal inside setTimeout (api.close())
    await waitAsyncFunctionEnded()

    expect(fn).toHaveBeenCalled()

    wrapper.unmount()
  })

  test('duration', async () => {
    let visible = true
    const fn = vi.fn()
    const duration = 1000

    const wrapper = mount(() => <Modal v-model={visible} type="message" duration={duration} onHide={fn}></Modal>)

    // need add modal inside setTimeout time
    await waitAsyncFunctionEnded(duration)

    expect(fn).toHaveBeenCalled()

    wrapper.unmount()

    // need wait to finish otherwise case 'top' will not pass
    await waitAsyncFunctionEnded()
  })

  test('width & height', async () => {
    let visible = true
    const width = 300
    const height = 200

    const wrapper = mount(() => <Modal v-model={visible} width={width} height={height}></Modal>)

    const style = wrapper.find('.tiny-modal__box').attributes('style')

    expect(style).toContain(`width: ${width}px`)
    expect(style).toContain(`height: ${height}px`)

    wrapper.unmount()
  })

  test.todo('min-width 窗口的最小宽度')

  test.todo('min-height 窗口的最小高度')

  test('top', async () => {
    let visible = true
    const top = 100

    const wrapper = mount(() => <Modal v-model={visible} type="message" top={top}></Modal>)

    await nextTick()

    expect(wrapper.find('.tiny-modal').attributes('style')).toContain(`top: ${top}px`)

    wrapper.unmount()
  })

  test('message-closable', () => {
    let visible = true

    const wrapper = mount(() => <Modal v-model={visible} type="message" messageClosable={true}></Modal>)

    expect(wrapper.find('.tiny-modal__close-btn').exists()).toBeTruthy()

    wrapper.unmount()
  })

  test.todo('confirm-content 确定按钮内容')

  test.todo('cancel-content 取消按钮内容')

  test.todo('confirm-btn-props 确定按钮props')

  test.todo('cancel-btn-props 取消按钮props')

  /**
   * slots
   */
  test('default', () => {
    let show = true
    const wrapper = mount(() => (
      <Modal
        v-model={show}
        v-slots={{
          default: () => <span class="custom-content">默认插槽-自定义内容</span>
        }}></Modal>
    ))
    expect(wrapper.find('span.custom-content').isVisible()).toBe(true)

    wrapper.unmount()
  })

  test('footer', () => {
    let visible = true

    const wrapper = mount(() => (
      <Modal v-model={visible} showFooter={true} v-slots={{ footer: () => <div class="slot-footer"></div> }}></Modal>
    ))

    expect(wrapper.find('.slot-footer').exists()).toBeTruthy()

    wrapper.unmount()
  })

  /**
   * events
   */
  test('show', async () => {
    let show = true
    const handleShow = vi.fn()
    const wrapper = mount(() => <Modal v-model={show} onShow={handleShow}></Modal>)
    await nextTick()
    expect(handleShow).toHaveBeenCalled()

    wrapper.unmount()
  })

  test('confirm & cancel', async () => {
    let visible = true
    const confirmFn = vi.fn()
    const cancelFn = vi.fn()

    const wrapper = mount(() => (
      <Modal v-model={visible} showFooter={true} type="confirm" onConfirm={confirmFn} onCancel={cancelFn}></Modal>
    ))

    const [confirmButton, cancelButton] = wrapper.findAll('.tiny-button')

    await confirmButton.trigger('click')
    expect(confirmFn).toHaveBeenCalled()

    await cancelButton.trigger('click')
    expect(cancelFn).toHaveBeenCalled()

    wrapper.unmount()
  })

  test('zoom', async () => {
    let visible = true
    const fn = vi.fn()

    const wrapper = mount(() => <Modal v-model={visible} onZoom={fn} resize={true} type="confirm"></Modal>)

    await wrapper.find('.sest-resize').trigger('mousedown')

    document.dispatchEvent(new MouseEvent('mousemove'))
    document.dispatchEvent(new MouseEvent('mouseup'))

    expect(fn).toHaveBeenCalled()
  })
})
