import { test, expect } from '@playwright/test'

test('多选项操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#operation-column-selection-operation')
  await page.getByRole('button', { name: '手动选中指定行' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(4).locator('input')).toBeChecked()
  await page.getByRole('button', { name: '手动切换指定行选中状态' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(1).locator('input')).toBeChecked()
  await page.getByRole('button', { name: '手动切换指定行选中状态' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(1).locator('input')).not.toBeChecked()

  await page.getByRole('button', { name: '手动选中所有行' }).click()
  for (const check of await page.locator('.tiny-grid-checkbox input').all()) {
    await expect(check).toBeChecked()
  }
  await page.getByRole('button', { name: '手动取消多选行' }).click()
  for (const check of await page.locator('.tiny-grid-checkbox input').all()) {
    await expect(check).not.toBeChecked()
  }
})
