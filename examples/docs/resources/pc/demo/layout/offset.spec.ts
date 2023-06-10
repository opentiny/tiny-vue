import { test, expect } from '@playwright/test'

test('偏移值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/layout/offset')
  const preview = page.locator('#preview')
  const div2 = preview.locator('.tiny-layout > div').nth(1)
  await expect(div2).toHaveClass(/col-md-offset-1/)
})
