import { test, expect } from '@playwright/test'

test('单选禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#disable-radio')
  await expect(page.locator('tr:nth-child(2) > td:nth-child(2) input')).toBeDisabled()
  await expect(page.locator('tr:nth-child(4) > td:nth-child(2) input')).toBeDisabled()
  await expect(page.locator('tr:nth-child(6) > td:nth-child(2) input')).toBeDisabled()
})
