import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#basic-usage')
  const radio1 = page.locator('.tiny-radio').nth(0)
  const radio2 = page.locator('.tiny-radio').nth(1)
  await expect(radio1).toBeVisible()
  await expect(radio2).toBeVisible()
  await expect(radio1).toHaveClass('tiny-radio is-checked')
})
