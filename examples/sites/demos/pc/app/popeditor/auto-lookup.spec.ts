import { test, expect } from '@playwright/test'

test('PopEditor 远程数据请求', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#auto-lookup')

  const preview = page.locator('#auto-lookup')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const grid = dialogBox.locator('.tiny-grid__wrapper').nth(0)

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(grid).toBeVisible()
})
