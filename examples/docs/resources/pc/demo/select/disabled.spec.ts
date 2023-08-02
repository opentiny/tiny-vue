import { test, expect } from '@playwright/test'

test('disabled', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/disabled')
  const input = page.locator('#preview .tiny-input__inner')
  const hasDisabled = await input.evaluate((input) => input.hasAttribute('disabled'))
  await expect(hasDisabled).toBe(true)
})
