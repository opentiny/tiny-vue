import { test, expect } from '@playwright/test'

test('钩子函数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/file-upload/custom-prefix')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const modal = page.locator('.tiny-modal')
  const delButton = page
    .getByRole('listitem')
    .filter({ hasText: 'test1按 delete 键可删除' })
    .getByTitle('删除文件')
    .locator('svg')

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(3)
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await lists.nth(0).hover()
  await delButton.click()
  await expect(lists).toHaveCount(2)
  await expect(modal).toHaveCount(2)
})
