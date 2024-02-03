import { test, expect } from '@playwright/test'

test('不显示关闭按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#showClose')
  await page.getByRole('button', { name: '不显示关闭按钮' }).click()
  const close = page.locator('.tiny-notify__close-zone')
  await expect(close).not.toBeVisible()
})
