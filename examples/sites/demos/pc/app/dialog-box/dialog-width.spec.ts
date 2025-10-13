import { test, expect } from '@playwright/test'

test('dialogBox 弹窗的宽度和最大高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#dialog-width')
  const demo = page.locator('#dialog-width')

  const dialogBox = demo.locator('.tiny-dialog-box')
  await demo.getByRole('button', { name: /30%/ }).click()
  await expect(dialogBox.first()).toHaveCSS('max-height', '200px')
  await demo.getByRole('button', { name: 'Close' }).click()
  await demo.getByRole('button', { name: /60%/ }).click()
  await expect(dialogBox.nth(1)).toBeVisible()
})
