import { test, expect } from '@playwright/test'

test('定义文件列表', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-file-list-slot')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(lists).toHaveCount(2)
  await expect(lists).toHaveText([/test1/, /test2/])
  await fileChooser.setFiles(currentPath)
  await page.getByText('测试.jpg').isVisible()
})
