import { test, expect } from '@playwright/test'

test('PopEditor 弹窗宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#width')

  const preview = page.locator('#width')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(dialogBox).toHaveCSS('width', '800px')
})
