import { test, expect } from '@playwright/test'

test('单选项配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#operation-column-radio-config')
  await expect(page.locator('.tiny-grid-body__row').nth(2).locator('input')).toBeChecked()
  await expect(page.locator('.tiny-grid-body__row').nth(3).locator('input')).toBeDisabled()
})
