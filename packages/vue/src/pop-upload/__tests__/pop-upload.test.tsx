import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import PopUpload from '@opentiny/vue-pop-upload'

describe('PC Mode', () => {
  const mount = mountPcMode

  // attrs
  test('size', async () => {
    const wrapper = mount(() => <PopUpload action="''" size="medium"></PopUpload>)
    expect(wrapper.find('.tiny-button--medium').exists()).toBe(true)
  })

  test('disabled', async () => {
    const wrapper = mount(() => <PopUpload action="''" disabled={true}></PopUpload>)
    expect(wrapper.find('.is-disabled').exists()).toBe(true)
  })

  test.todo('dialog-title, 设置文件上传弹框的标题,默认为“文件上传”')

  test.todo('submit-button-text, 设置文件上传弹框中提交按钮的文本,默认为“开始上传”')

  test.todo('cancel-button-text, 设置文件上传弹框中取消按钮的文本,默认为“取消”')

  test.todo('action, 必选参数，设置上传的地址')

  test.todo('headers, 设置上传的请求头部')

  test.todo('limit, 最大允许上传个数')

  test.todo('multiple, 是否支持多选文件')

  test.todo('accept, 接受上传的文件类型')

  test.todo('upload-file-type, 对上传文件进行校验的类型，比如 [".png", ".jpg"]')

  test.todo('max-upload-file-size, 最大上传文件大小')

  test.todo('upload-name, 上传的文件字段名,默认值为file')

  test.todo('upload-button-text, 打开弹出框的按钮的文本配置属性，默认为“选择文件”')

  test.todo('with-credentials, 支持发送 cookie 凭证信息，默认为 false')

  test.todo('before-remove, 在上传文件列表点击删除成功前触发的事件')

  test.todo(
    'before-upload, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传'
  )

  test.todo('http-request, 覆盖默认的上传行为，可以自定义上传的实现')

  test.todo('data, 上传时附带的额外参数')
})
