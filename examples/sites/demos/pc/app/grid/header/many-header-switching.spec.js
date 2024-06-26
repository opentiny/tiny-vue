import { test, expect } from '@playwright/test'

test('控制隐藏表头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-header#many-header-switching')
  await expect(page.locator('.tiny-grid-header__column')).toHaveCount(8)
  await page.getByRole('button', { name: '新增子表头' }).click()
  await expect(page.locator('.tiny-grid-header__column')).toHaveCount(10)
  await page.getByRole('button', { name: '删除子表头' }).click()
  await expect(page.locator('.tiny-grid-header__column')).toHaveCount(8)
})
