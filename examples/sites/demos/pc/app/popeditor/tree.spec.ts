import { test, expect } from '@playwright/test'

test('PopEditor 开启树模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#tree')

  const preview = page.locator('#tree')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const tree = dialogBox.locator('.tiny-tree')

  // tree模式
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(tree).toBeVisible()
})
