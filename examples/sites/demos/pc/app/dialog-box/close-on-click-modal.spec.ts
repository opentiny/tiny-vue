import { test, expect } from '@playwright/test'

test('dialogBox 点击遮罩时不关闭弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#close-on-click-modal')
  const dialogBox = page.locator('.tiny-dialog-box')
  const mask = page.locator('.tiny-dialog-box__wrapper')
  await page.getByRole('button', { name: '弹出Dialogfalse' }).click()
  await expect(dialogBox).toBeVisible()
  await mask.click()
  await expect(dialogBox).toBeVisible()
})
