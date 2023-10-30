import { test, expect } from '@playwright/test'

test('隐藏右上的关闭按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#hidden-close-buttons')

  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '无关闭按钮' }).click()
  await expect(dialogBox.getByRole('button', { name: 'Close' })).not.toBeVisible()
})
