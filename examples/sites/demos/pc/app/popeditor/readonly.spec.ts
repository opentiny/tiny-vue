import { test, expect } from '@playwright/test'

test('PopEditor 只读', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#readonly')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')

  await textBox.click()
  await expect(dialogBox).not.toBeVisible()
})
