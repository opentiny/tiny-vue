import { test, expect } from '@playwright/test'

test('dialogBox 点击遮罩时不关闭弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#close-on-click-modal')

  const preview = page.locator('#preview')
  const button = preview.getByRole('button', { name: '弹出Dialog' })
  const dialogBox = preview.locator('.tiny-dialog-box')
  const mask = preview.locator('.tiny-dialog-box__wrapper')

  await button.click()
  await expect(dialogBox).toBeVisible()
  await mask.click()
  await expect(dialogBox).toBeVisible()
})
