import { expect, test } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#basic')

  const first = page.locator('.tiny-skeleton')
  const children = page.locator('.tiny-skeleton-item')
  const active = page.locator('.tiny-skeleton-item--active')

  await expect(first).toHaveCount(1)
  await expect(children).toHaveCount(4)
  await expect(active).toHaveCount(4)
})
