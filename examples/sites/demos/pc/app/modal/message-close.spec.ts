import { test, expect } from '@playwright/test'

test('消息的关闭和延时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message-close')
  await page.getByRole('button', { name: '消息可关闭' }).click()
  const info = page.locator('div').filter({ hasText: '自定义消息的内容可关闭，5s 后得自动关闭' })
  await expect(info.nth(1)).toHaveText(/5s 后得自动关闭/)
})
