import { test, expect } from '@playwright/test'

test('dialogBox 自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-content')
  const button = page.getByRole('button', { name: /Dialog/ })
  const dialogBox = page.locator('.tiny-dialog-box')
  await button.click()
  await expect(dialogBox).toBeVisible()
  await page.locator('.tiny-alert__close').click()
  await page.waitForTimeout(300)
  await page.getByRole('button', { name: /确 定/ }).click()
  await expect(dialogBox).toBeHidden()
})
