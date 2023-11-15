import { expect, test } from '@playwright/test'

test('是否正常移除标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#closable')

  const first = page.locator('.tiny-tag').filter({ hasText: '标签一' })
  const close = first.locator('.tiny-tag__close')
  const modal = page.locator('.tiny-modal__box')

  await close.click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await expect(first).not.toBeVisible()
})
