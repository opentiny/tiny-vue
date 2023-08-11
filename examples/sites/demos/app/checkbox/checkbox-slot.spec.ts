import { test, expect } from '@playwright/test'

test('插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/checkbox/checkbox-slot')
  const preview = page.locator('#preview')
  const checkbox = preview.locator('.tiny-checkbox-group > label')
  await expect(checkbox.first().locator('.tiny-checkbox__label > span')).toHaveCSS('color', 'rgb(255, 0, 0)')
  await expect(checkbox.nth(1).locator('.tiny-checkbox__label > span')).toHaveCSS('color', 'rgb(0, 0, 255)')
})
