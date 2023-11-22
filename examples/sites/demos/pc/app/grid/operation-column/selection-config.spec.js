import { test, expect } from '@playwright/test'

test('多选配置项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#operation-column-selection-config')
  await expect(page.locator('.tiny-grid-body__row').nth(0).locator('input')).toBeChecked()
  await expect(page.locator('.tiny-grid-body__row').nth(1).locator('input')).toBeDisabled()
  await expect(page.locator('.tiny-grid-body__row').nth(3).locator('input')).toBeDisabled()
})
