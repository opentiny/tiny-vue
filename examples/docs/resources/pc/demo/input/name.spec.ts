import { test, expect } from '@playwright/test'

test('原生属性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/name')
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(input.nth(0)).toHaveAttribute('name', 'inputName')
  await expect(input.nth(1)).toHaveAttribute('disabled', '')
  await expect(input.nth(2)).toHaveAttribute('readonly', '')
})
