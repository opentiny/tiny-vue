import { test, expect } from '@playwright/test'

test('当前是否勾选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/checkbox/checked')
  const preview = page.locator('#preview')
  const checkbox = preview.locator('.tiny-checkbox-group > label')
  await expect(checkbox.first()).toHaveClass(/is-checked/)
  await expect(checkbox.nth(1)).toHaveClass(/is-disabled/)
  await expect(checkbox.nth(2)).toHaveClass(/is-disabled is-checked/)
})
