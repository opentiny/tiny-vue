import { test, expect } from '@playwright/test'

test('多行按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-button-multiple')
  const preview = page.locator('#preview')
  const checkbox = preview.locator('.tiny-checkbox-group > label')
  await checkbox.nth(2).click()
  await expect(checkbox.nth(2)).toHaveClass(/is-checked/)
})
