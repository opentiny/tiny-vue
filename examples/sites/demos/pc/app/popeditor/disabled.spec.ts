import { test, expect } from '@playwright/test'

test('PopEditor 禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#disabled')

  const preview = page.locator('#disabled')
  const textBox = preview.getByRole('textbox')

  // 禁用
  await expect(textBox).toBeDisabled()
})
