import { test, expect } from '@playwright/test'

test('Divider 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#basic-usage')
  await page.locator('.tiny-divider').click()
})
