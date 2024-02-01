import { test, expect } from '@playwright/test'

test('文件列表', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-file-list')

  const upload = page.getByRole('button', { name: '点击上传' })
  const items = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const { width, height } = await items.nth(0).boundingBox()

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toBeGreaterThanOrEqual(708)
  await expect(height).toBeGreaterThanOrEqual(25, 0)
  await expect(items).toHaveCount(2)
  await expect(items).toHaveText([/test1/, /test2/])
  await fileChooser.setFiles(currentPath)
  await page.getByText('测试.jpg').isVisible()
  await expect(items).toHaveText([/test1/, /test2/])
})
