import { test, expect } from '@playwright/test'

test('消息的关闭和延时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message-close')
  const content = page.locator('.tiny-modal__text')
  await page.getByRole('button', { name: '消息可关闭' }).click()
  await expect(content).toHaveText(/5s 后得自动关闭/)
})
