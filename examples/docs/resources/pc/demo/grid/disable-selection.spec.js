import { test, expect } from '@playwright/test'

test('手动切换指定行选中状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-operation-column/disable-selection')
  await expect(page.locator('tr:nth-child(2) > td:nth-child(2) input')).toBeDisabled()
  await expect(page.locator('tr:nth-child(4) > td:nth-child(2) input')).toBeDisabled()
  await expect(page.locator('tr:nth-child(6) > td:nth-child(2) input')).toBeDisabled()
})
