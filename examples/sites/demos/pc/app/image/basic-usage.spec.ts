import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#basic-usage')

  const img = page.locator('.tiny-image > .tiny-image__inner')
  await expect(img).toHaveCount(5)
})
