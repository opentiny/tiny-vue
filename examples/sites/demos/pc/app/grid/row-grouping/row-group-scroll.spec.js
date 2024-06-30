import { test, expect } from '@playwright/test'

test('分组表格虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-row-grouping#row-group-scroll')
  const row = page.locator('.tiny-grid-body__row')
  await expect(row.nth(1).locator('.tiny-grid-cell').first()).toContainText('1')
  await row.first().click()
  await page.mouse.wheel(0, 500)
  await page.waitForTimeout(500)
  await page.mouse.wheel(0, -500)
  await expect(row.nth(1).locator('.tiny-grid-body__column').first()).toContainText('')
})
