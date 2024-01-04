import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#disabled')

  const upload = page.locator('.tiny-upload')

  await expect(upload).toHaveClass(/is-disabled/)
})
