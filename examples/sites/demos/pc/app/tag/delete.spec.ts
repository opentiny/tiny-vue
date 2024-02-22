import { expect, test } from '@playwright/test'

test('是否能阻止删除或正常删除标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#delete')

  const first = page.locator('.tiny-tag').filter({ hasText: '标签一' })
  const close = first.locator('.tiny-tag__close')
  const modal = page.locator('.tiny-modal__box').getByText('消息提示确认删除？确定取消')

  await close.click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await page.getByRole('button', { name: '取消' }).click()
  await first.isVisible()
  await close.click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await page.getByRole('button', { name: '确定' }).click()
  await expect(first).not.toBeVisible()
})
