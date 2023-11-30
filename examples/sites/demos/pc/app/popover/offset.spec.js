import { test, expect } from '@playwright/test'

test('箭头偏移', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#offset')

  // 默认偏移和50偏移
  await expect(page.locator('.popper__arrow').nth(0)).toBeVisible()
  await expect(page.locator('.popper__arrow').nth(1)).toBeVisible()
})
