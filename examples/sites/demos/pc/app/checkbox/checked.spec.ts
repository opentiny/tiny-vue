import { test, expect } from '@playwright/test'

test('当前是否勾选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checked')

  const demo = page.locator('#checked')
  const checkbox = demo.locator('.tiny-checkbox-group > label')
  await expect(checkbox.first()).toHaveClass(/is-checked/)
  await expect(checkbox.nth(1)).toHaveClass(/is-checked/)
  await expect(checkbox.nth(2)).not.toHaveClass(/is-checked/)
})
