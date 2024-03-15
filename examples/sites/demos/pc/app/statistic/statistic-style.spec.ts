import { test, expect } from '@playwright/test'

test('样式用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('statistic#statistic-style')
  await expect(page.getByText('Like:306,526').first()).toHaveClass(/tiny-statistic__slots/)
})
