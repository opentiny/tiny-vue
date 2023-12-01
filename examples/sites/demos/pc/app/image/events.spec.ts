import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#events')
  const errorSlot = page.locator('.tiny-image__error')
  await page.waitForTimeout(300)
  await expect(errorSlot).toHaveCount(1)
})
