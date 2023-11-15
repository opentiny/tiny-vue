import { test, expect } from '@playwright/test'

test('多字段组合排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-sort#sort-combinations-sort')
  await page.getByRole('cell', { name: '员工数(员工数和名称组合排序)' }).locator('path').nth(1).click()
  await expect(page.locator('.tiny-grid-body__row').first()).toContainText('300')
})
