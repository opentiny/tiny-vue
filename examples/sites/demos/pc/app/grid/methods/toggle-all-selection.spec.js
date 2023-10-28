import { test, expect } from '@playwright/test'

test('手动切换指定行选中状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#methods-toggle-all-selection')
  await page.getByRole('button', { name: 'toggleAllSelection' }).click()

  // 判断所有行都被选中了
  for (const check of await page.locator('.tiny-grid-checkbox input').all()) {
    await expect(check).toBeChecked()
  }

  await page.getByRole('button', { name: 'toggleAllSelection' }).click()

  // 判断所有行都未被选中
  for (const check of await page.locator('.tiny-grid-checkbox input').all()) {
    await expect(check).not.toBeChecked()
  }
})
