import { test, expect } from '@playwright/test'

test('表头自动禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#operation-column-dropdown')

  await expect(page.locator('th:nth-child(2)').first().locator('input')).toBeDisabled
})
