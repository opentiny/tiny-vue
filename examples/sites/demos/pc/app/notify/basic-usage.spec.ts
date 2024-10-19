import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#basic-usage')

  const status = page.locator('.tiny-notify__icon-status')

  await page.getByRole('button', { name: '弹出提示框' }).first().click()
  await expect(status).toBeVisible()
  await expect(
    page.getByText('通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文')
  ).toBeVisible()
  const close = page.locator('.tiny-notify__icon-close > .tiny-svg')
  await expect(close).toBeVisible()
})
