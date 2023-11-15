import { test, expect } from '@playwright/test'

test('PopUpload 自定义请求头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#custom-request-headers')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-modal')
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
  const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await modalAppearBtn.click()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(currentPath)

  // 获取请求头
  const [request] = await Promise.all([page.waitForEvent('request'), uploadsBtn.click()])
  const { authorization } = await request.headers()

  await expect(request.headers()).not.toBeNull()
  await expect(authorization).toEqual('Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==')
})
