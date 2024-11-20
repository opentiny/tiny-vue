import { test, expect } from '@playwright/test'

test('防止重复消息提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message-id')
  const content = page.locator('.tiny-modal__text')
  await page.getByRole('button', { name: '重复点击不出现多个' }).click()
  await expect(content).toHaveText(/唯一 id/)
})
