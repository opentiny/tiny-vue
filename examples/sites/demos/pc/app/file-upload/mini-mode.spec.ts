import { test, expect } from '@playwright/test'

test('mini模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#mini-mode')

  const upload = page.locator('.tiny-file-upload')

  await expect(upload).toHaveAttribute('minimode', 'true')
})
