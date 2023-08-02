import { test, expect } from '@playwright/test'

test('最大值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/max')
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(input).toHaveAttribute('max', '2')
})
