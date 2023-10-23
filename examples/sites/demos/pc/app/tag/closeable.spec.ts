import { expect, test } from '@playwright/test'

test('是否正常移除标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://localhost:7130/pc/tag/closeable')

  const tag = page.locator('.tiny-tag').filter({ hasText: '标签一' })
  const close = tag.locator('.tiny-tag__close')

  await close.click()
  await expect(tag, 'Deletion failed').not.toBeVisible()
})
