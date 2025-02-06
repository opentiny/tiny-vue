import { test, expect } from '@playwright/test'

test('插槽用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('statistic#statistic-slot')
  const desc = page.locator('.tiny-statistic__description-margin')
  await page
    .locator('div')
    .filter({ hasText: /^存储总量已使用容量\(GB\)10,010,258GB$/ })
    .first()
  await expect(desc.first()).toHaveCSS('font-weight', '500')
})
