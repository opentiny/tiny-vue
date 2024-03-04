import { test, expect } from '@playwright/test'

test.describe('设置上传请求', () => {
  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')

  test('上传请求', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('file-upload#upload-request')

    const upload = page.getByRole('button', { name: '选取文件' })
    const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
    await fileChooser.setFiles(path1)
    page.on('requestfailed', (request) => {
      expect(request.url()).toEqual('http://localhost:3000/api/upload')
    })
    await page.waitForTimeout(200)
  })

  test('支持发送 cookie 凭证信息', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('file-upload#upload-request')

    const upload = page.getByRole('button', { name: '选取文件' })
    const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
    await fileChooser.setFiles(path1)
    page.on('requestfailed', (request) => {
      const { authorization } = request.headers()

      expect(request.headers()).not.toBeNull()
      expect(authorization).toEqual('Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==')
    })
  })
})
