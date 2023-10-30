import { test, expect } from '@playwright/test'

test('手动上传', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#manual-upload')

  const upload = page.getByRole('button', { name: '选取文件' })
  const server = page.getByRole('button', { name: '上传到服务器' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveText(/测试.jpg/)
  await server.click()
  await lists.waitFor({ state: 'hidden', timeout: 3000 })
  await expect(lists).toHaveCount(0)
})
