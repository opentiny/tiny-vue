import { test, expect } from '@playwright/test'

test('PopEditor 布局与配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#condition-layout')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const leftLayout = dialogBox.locator('.tiny-popeditor-body__left')
  const rightLayout = dialogBox.locator('.tiny-popeditor-body__right')

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(leftLayout).toBeVisible()
  await expect(rightLayout).toBeVisible()
})
