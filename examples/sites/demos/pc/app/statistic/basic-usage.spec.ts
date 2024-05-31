import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('statistic#basic-usage')
  await page.locator('#basic-usage').getByText('306,526', { exact: true })
  await page.getByText('306,526.23')
})
