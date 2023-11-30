import { test, expect } from '@playwright/test'

test('工具栏插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-buttons-slot')
  await page.getByRole('button', { name: '新增' }).click()

  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(7)
})
