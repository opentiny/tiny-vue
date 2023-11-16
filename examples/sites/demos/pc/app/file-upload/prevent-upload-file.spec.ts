import { test, expect } from '@playwright/test'

test('阻止上传文件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#prevent-upload-file')

  const upload = page.getByRole('button', { name: '选取文件' })
  const modal = page.locator('.tiny-modal')
  const modalCancel = page.getByRole('button', { name: '取消' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(lists).toHaveCount(1)
  await expect(lists).toHaveText(/test1/)
  await fileChooser.setFiles(currentPath)
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await modalCancel.click()
  await expect(lists).toHaveCount(1)
  await expect(lists).toHaveText(/test1/)
})
