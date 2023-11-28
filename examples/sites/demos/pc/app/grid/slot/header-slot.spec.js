import { test, expect } from '@playwright/test'

test('表头插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-header-slot')

  await expect(page.getByRole('cell', { name: '位置区域' }).getByRole('img')).toBeVisible()
})
