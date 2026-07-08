import { describe, expect, test, vi } from 'vitest'
import { beforeUpload } from '@opentiny/vue-renderless/file-upload'
import { $constants as constants } from '../src/index'

/**
 * accept 使用 MIME 通配符（image/*、video/*、audio/*）时的校验。
 * 修复 #4237：此前仅 image/* 走扩展名白名单，video/*、audio/* 会落入正则分支，
 * 通配符 * 被当作正则量词，导致 mp4、mp3 等合法文件被误拦截。
 */

const t = (_key: string, params?: { format?: string }) =>
  params?.format ? `格式（.${params.format}）暂不支持` : '暂不支持'

type BeforeUploadOptions = Parameters<typeof beforeUpload>[0]

const createUploadFn = (accept: string, modalMessage = vi.fn()) =>
  beforeUpload({
    props: { accept },
    api: { handleRemove: vi.fn() },
    Modal: { message: modalMessage },
    constants,
    t,
    state: { isEdm: false, triggerClickType: '' }
    // 单测仅构造 accept 校验所需的最小依赖，props/api/state 为部分 mock
  } as BeforeUploadOptions)

const makeFile = (name: string, type: string) => ({
  name,
  raw: new File([], name, { type })
})

describe('file-upload accept 通配符校验', () => {
  test('accept=video/* 时 mp4 应通过校验并上传', () => {
    const modalMessage = vi.fn()
    const doUpload = vi.fn()

    createUploadFn('video/*', modalMessage)(makeFile('测试.mp4', 'video/mp4'), false, doUpload)

    expect(modalMessage).not.toHaveBeenCalled()
    expect(doUpload).toHaveBeenCalled()
  })

  test('accept=video/* 时非视频文件仍应被拦截', () => {
    const modalMessage = vi.fn()
    const doUpload = vi.fn()

    createUploadFn('video/*', modalMessage)(makeFile('测试.txt', 'text/plain'), false, doUpload)

    expect(modalMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        message: '格式（.txt）暂不支持',
        status: 'warning'
      })
    )
    expect(doUpload).not.toHaveBeenCalled()
  })

  test('accept=audio/* 时 mp3 应通过校验并上传', () => {
    const modalMessage = vi.fn()
    const doUpload = vi.fn()

    createUploadFn('audio/*', modalMessage)(makeFile('测试.mp3', 'audio/mpeg'), false, doUpload)

    expect(modalMessage).not.toHaveBeenCalled()
    expect(doUpload).toHaveBeenCalled()
  })

  test('对照：accept=image/* 时 jpg 可通过校验', () => {
    const modalMessage = vi.fn()
    const doUpload = vi.fn()

    createUploadFn('image/*', modalMessage)(makeFile('测试.jpg', 'image/jpeg'), false, doUpload)

    expect(modalMessage).not.toHaveBeenCalled()
    expect(doUpload).toHaveBeenCalled()
  })

  test('对照：accept=.mp4 精确扩展名仍可通过校验', () => {
    const modalMessage = vi.fn()
    const doUpload = vi.fn()

    createUploadFn('.mp4', modalMessage)(makeFile('测试.mp4', 'video/mp4'), false, doUpload)

    expect(modalMessage).not.toHaveBeenCalled()
    expect(doUpload).toHaveBeenCalled()
  })
})
