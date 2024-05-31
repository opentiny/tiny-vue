import { test, expect } from '@playwright/test'

test('样式用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('statistic#statistic-style')
  await page
    .locator('div')
    .filter({ hasText: /^进行中306,526$/ })
    .first()
  await page.getByText('306,526失败').click()
  await expect(page.getByText(/^进行中306,526$/).first()).toHaveClass(/tiny-statistic__slots/)
})
