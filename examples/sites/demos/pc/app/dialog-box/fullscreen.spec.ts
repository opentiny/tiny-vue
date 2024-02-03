import { test, expect } from '@playwright/test'

test('全屏弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#fullscreen')

  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '全屏弹窗' }).click()
  await expect(dialogBox).toHaveClass(/is-fullscreen/)
  await expect(page.locator('body')).toHaveClass(/dialog-box__scroll-lock/)
})
