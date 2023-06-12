import { test, expect } from '@playwright/test'

test('后置内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/slot-append')
  const append = page.locator('.tiny-input-group__append')
  await expect(append).toBeVisible()
})
