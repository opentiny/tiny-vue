import { test, expect } from '@playwright/test'

test('自定义上传请求', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#custom-upload-request')

  const upload = page.getByRole('button', { name: '选取文件' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  const [request] = await Promise.all([page.waitForEvent('requestfailed'), fileChooser.setFiles(currentPath)])
  const { authorization } = await request.headers()

  await expect(request.headers()).not.toBeNull()
  await expect(authorization).toEqual('Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==')
})
