import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#basic-usage')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(1)
  await expect(lists).toHaveText('测试.jpg按 delete 键可删除')
})
