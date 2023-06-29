import { test, expect } from '@playwright/test'

test('PopEditor 开启树模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/tree')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const tree = dialogBox.locator('.tiny-tree')

  // tree模式
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(tree).toBeVisible()


})
