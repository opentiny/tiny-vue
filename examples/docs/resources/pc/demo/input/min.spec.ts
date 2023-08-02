import { test, expect } from '@playwright/test'

test('最小值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/min')
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(input).toHaveAttribute('min', '2')
})
