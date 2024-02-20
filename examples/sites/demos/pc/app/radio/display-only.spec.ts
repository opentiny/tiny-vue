import { test, expect } from '@playwright/test'

test('只读状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#display-only')

  const demo = page.locator('#active-color')
  const radioInput = demo.locator('.tiny-radio__input')

  await expect(radioInput).not.toBeVisible()
})
