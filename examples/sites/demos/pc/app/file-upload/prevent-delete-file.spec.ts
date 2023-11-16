import { test, expect } from '@playwright/test'

test('阻止删除文件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#prevent-delete-file')

  const lists = page.locator('.tiny-upload-list__item')
  const close = page.getByTitle('删除文件').locator('svg')
  const modal = page.locator('.tiny-modal')
  const modalCancel = page.getByRole('button', { name: '取消' })

  await expect(lists).toHaveCount(1)
  await expect(lists).toHaveText(/test1/)
  await lists.hover()
  await close.click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await modalCancel.click()
  await expect(lists).toHaveCount(1)
  await expect(lists).toHaveText(/test1/)
})
