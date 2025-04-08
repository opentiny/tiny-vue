import { test, expect } from '@playwright/test'

test('dialogBox 自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-content')
  const demo = page.locator('#custom-dialog-content')
  const button = demo.getByRole('button', { name: /Dialog/ })
  const dialogBox = demo.locator('.tiny-dialog-box')
  await button.click()
  expect(demo.locator('b')).toHaveText(/自定义内容/)
  await expect(dialogBox).toBeVisible()
  await page.waitForTimeout(300)
  await demo.getByRole('button', { name: /确 定/ }).click()
  await expect(dialogBox).toBeHidden()
})
