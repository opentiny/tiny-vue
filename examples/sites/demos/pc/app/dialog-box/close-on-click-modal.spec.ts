import { test, expect } from '@playwright/test'

test('dialogBox 点击遮罩时不关闭弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#close-on-click-modal')
  const demo = page.locator('#close-on-click-modal')
  const dialogBox = demo.locator('.tiny-dialog-box')
  const mask = demo.locator('.tiny-dialog-box__wrapper')
  await demo.getByRole('button', { name: /Dialog/ }).click()
  await expect(dialogBox).toBeVisible()
  await mask.click()
  await expect(dialogBox).toBeVisible()
})
