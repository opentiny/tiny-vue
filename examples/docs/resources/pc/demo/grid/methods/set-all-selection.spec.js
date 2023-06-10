import { test, expect } from '@playwright/test'

test('手动选中所有行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-operation-column/methods-set-all-selection')
  await page.getByRole('button', { name: '手动选中所有行' }).click()

  // 判断所有行都被选中了
  for (const check of await page.locator('.tiny-grid-checkbox input').all()) {
    await expect(check).toBeChecked()
  }
})
