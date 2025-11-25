import { test, expect } from '@playwright/test'

test('dialogSelect 表格单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-select#nest-grid-single')

  await page.locator('#nest-grid-single').getByRole('button', { name: '打开窗口' }).click()

  await page.locator('.tiny-grid-body__row').first().waitFor()
  let rows
  rows = await page.locator('.tiny-grid-body__row').all()
  for (const row of rows) {
    const checked = await row.locator('input[type="radio"]').isChecked()
    expect(checked).toBe(false)
  }

  await page.getByRole('row', { name: 'GFD 科技有限公司 福建 福州' }).locator('path').nth(1).click()

  rows = await page.locator('.tiny-grid-body__row').all()
  for (let i = 0; i < rows.length; i++) {
    const checked = await rows[i].locator('input[type="radio"]').first().isChecked()
    if (i === 0) {
      expect(checked).toBe(true)
    } else {
      expect(checked).toBe(false)
    }
  }

  await page.getByRole('row', { name: 'WWW 科技有限公司 广东 深圳' }).locator('path').nth(1).click()

  rows = await page.locator('.tiny-grid-body__row').all()
  for (let i = 0; i < rows.length; i++) {
    const checked = await rows[i].locator('input[type="radio"]').first().isChecked()
    if (i === 1) {
      expect(checked).toBe(true)
    } else {
      expect(checked).toBe(false)
    }
  }
})
