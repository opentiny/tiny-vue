import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#basic-usage')
  const loading = page.locator('#tiny-basic-loading1 > .tiny-loading > .tiny-loading__spinner > .circular')
  await expect(loading).toBeVisible()
  await page.getByRole('button', { name: 'close Loading' }).click()
  await expect(loading).not.toBeVisible()
})
