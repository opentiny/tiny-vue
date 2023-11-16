import { test, expect } from '@playwright/test'

test('文件多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#multiple-file')

  const upload = page.getByRole('button', { name: '选取文件' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const input = page.locator('.tiny-upload__input')

  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.svg')
  const path3 = path.resolve(__dirname, '测试.png')

  await expect(fileChooser.isMultiple()).toBe(true)
  await fileChooser.setFiles([path1, path2, path3])
  await expect(lists).toHaveCount(3)
  await expect(input).toHaveAttribute('multiple', '')
})
