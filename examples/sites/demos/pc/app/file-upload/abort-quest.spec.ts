import { test, expect } from '@playwright/test'

test('手动取消上传请求', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#abort-quest')

  const upload = page.locator('.tiny-upload')
  const lists = page.locator('.tiny-upload-list__item')
  const modal = page.locator('.tiny-modal')
  const button = page.locator('button').filter({ hasText: '取消上传' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await button.click()
  await expect(modal).toHaveText('手动取消上传')
  await fileChooser.setFiles(currentPath)
  await expect(fileChooser.isMultiple()).toBe(false)
  await expect(lists).toHaveCount(1)
})
