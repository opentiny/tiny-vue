import { test, expect } from '@playwright/test'

test('PopEditor 表格编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#grid')

  const preview = page.locator('#grid')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const grid = dialogBox.locator('.tiny-grid__wrapper')

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(grid).toBeVisible()
})
