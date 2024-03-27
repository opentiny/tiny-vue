import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('statistic#basic-usage')
  await page
    .locator('div')
    .filter({ hasText: /123\/100$/ })
    .first()
    .click()
  await page
    .locator('div')
    .filter({ hasText: /^基本用法$/ })
    .first()
    .click()
  await page
    .locator('div')
    .filter({ hasText: /^306,526\.23$/ })
    .click()
})
