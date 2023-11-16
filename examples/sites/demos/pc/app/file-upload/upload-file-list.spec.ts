import { test, expect } from '@playwright/test'

test('上传的文件列表', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-file-list')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const { width, height } = await lists.nth(0).boundingBox()

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toEqual(771)
  await expect(height).toBeCloseTo(25, 0)
  await expect(lists).toHaveCount(2)
  await expect(lists).toHaveText([/test1/, /test2/])
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(3)
  await expect(lists).toHaveText([/test1/, /test2/, /测试.jpg/])
})
