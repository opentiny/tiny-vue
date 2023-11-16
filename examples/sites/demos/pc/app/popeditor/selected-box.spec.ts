import { test, expect } from '@playwright/test'

test('PopEditor 已选表格显示为已选栏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#selected-box')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const grid = dialogBox.locator('.tiny-grid__wrapper')
  const selectedBox = dialogBox.locator('.tiny-selected-box')

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(grid).toBeVisible()
  await expect(selectedBox).toBeVisible()
})
