import { test, expect } from '@playwright/test'

test('设置表头单元格样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-header-style-header-row-style')
  await expect(page.locator('.header__row--red')).toBeVisible()
})
