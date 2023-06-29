import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Notify from '@opentiny/vue-notify'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base', () => {
    Notify({
      type: 'info',
      title: '通知消息的标题',
      message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
      position: 'top-right',
      duration: 5000,
      customClass: 'my-custom-cls'
    })
    expect(document.querySelector('.tiny-notify')).toBeDefined()
  })

  // 可通过 type 设置不同的类型。可选值：success、warning、info、error，默认值：info 
  test.todo('type')

  // 可通过 duration 属性设置自动关闭的延迟时间，默认值：4500ms
  test.todo('duration')

  // 可通过 position 属性设置通知框显示位置，默认值：bottom-right
  test.todo('position')

  // 可通过 title 属性设置通知框标题
  test.todo('title')

  // 可通过 message 属性设置通知框的内容
  test.todo('message')

  // showClose message 属性设置通知框是否显示关闭按钮，默认值：true
  test.todo('showClose')

  // 可通过 showIcon 属性设置通知框是否显示类型图标，默认值：true
  test.todo('showIcon')

  // 可通过 closeIcon 属性设置通知框关闭图标，默认值：IconClose
  test.todo('closeIcon')

  // 可通过 statusIcon 属性设置通知框类型图标，默认值：IconInfoSolid
  test.todo('statusIcon')

  // 可通过 beforeClose 属性设置通知框关闭前的事件
  test.todo('beforeClose')

  // 可通过 onClose 属性设置通知点击关闭按钮时触发事件
  test.todo('close')

  // 可通过 debounceDelay 设置防抖时间
  test.todo('debounceDelay')

  // 可通过 verticalOffset 设置垂直方向偏离距离
  test.todo('verticalOffset')
})
