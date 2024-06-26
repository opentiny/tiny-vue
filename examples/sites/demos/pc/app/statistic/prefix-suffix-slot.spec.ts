import { test, expect } from '@playwright/test'

test('前后缀', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('statistic#prefix-suffix-slot')
  await page
    .locator('div')
    .filter({ hasText: /^已使用容量\(GB\)306GB$/ })
    .first()
  await page
    .locator('div')
    .filter({ hasText: /^￥1,280\.00\/年$/ })
    .first()
  await page
    .locator('div')
    .filter({ hasText: /^300GB$/ })
    .first()
  await expect(page.getByText(/^￥1,280\.00\/年$/)).toHaveClass(/tiny-statistic__slots/)
})
