import { test, expect } from '@playwright/test'

test('dialogBox 头部和底部水平居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#center')

  const preview = page.locator('#preview')
  const button = preview.getByRole('button', { name: '弹出Dialog' })
  const dialogBox = preview.locator('.tiny-dialog-box')
  const header = dialogBox.locator('.tiny-dialog-box__header')
  const footer = dialogBox.locator('.tiny-dialog-box__footer')

  // 头部水平居中
  await expect(dialogBox).toHaveClass(/is-center/)
  await button.click()
  await expect(dialogBox).toBeVisible()
  await expect(header).toHaveCSS('text-align', 'center')

  // 底部水平居中
  await expect(footer).toHaveCSS('text-align', 'center')
})
