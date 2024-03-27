import { test, expect } from '@playwright/test'

test('插槽用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('statistic#statistic-slot')
  await page.locator('div').filter({ hasText: /^10,010,258$/ })
  await page
    .locator('div')
    .filter({ hasText: /^306,526\.23$/ })
    .first()
  await page.getByText('Like:306,526').click()
  await page.getByText('600/').click()
})
