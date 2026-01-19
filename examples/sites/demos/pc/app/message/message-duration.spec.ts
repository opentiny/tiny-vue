import { test, expect } from '@playwright/test'

test('消息的关闭和延时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('message#message-duration')
  await page.getByRole('button', { name: '消息时长' }).click()
  const info = page.locator('div').filter({ hasText: /5s 后得自动关闭/ })
  await expect(info.nth(1)).toHaveText(/5s 后得自动关闭/)
})
