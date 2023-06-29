import { test, expect } from '@playwright/test'

test('PopEditor 禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/disabled')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')

  // 禁用
  await expect(textBox).toBeDisabled()
  
})
