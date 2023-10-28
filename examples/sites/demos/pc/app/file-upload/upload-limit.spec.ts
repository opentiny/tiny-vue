import { test, expect } from '@playwright/test'

test('最大上传限制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-limit')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.svg')
  const path3 = path.resolve(__dirname, '测试.png')

  await fileChooser.setFiles(path1)
  await expect(lists).toHaveCount(1)
  await fileChooser.setFiles(path2)
  await expect(lists).toHaveCount(1)
  await fileChooser.setFiles(path3)
  await expect(lists).toHaveCount(1)
  await expect(lists).toHaveText(/测试.jpg/)
})
