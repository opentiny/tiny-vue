import { test, expect } from '@playwright/test'

test('手动取消单选行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#operation-column-clear-and-set-radio-row')
  await page.getByRole('button', { name: '手动选中某一行' }).click()

  await expect(page.locator('.tiny-grid-body__row').nth(4).locator('input')).toBeChecked()
  await page.getByRole('button', { name: '手动取消单选行' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(4).locator('input')).not.toBeChecked()
})
