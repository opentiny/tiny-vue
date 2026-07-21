import { test, expect } from '@playwright/test'

test('防止重复消息提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('message#prevent-duplicate')
  await page.getByRole('button', { name: '重复点击不出现多个' }).click()
  const info = await page.locator('div').filter({ hasText: '自定义消息具有唯一 id，所以不会重复出现' })
  await expect(info.nth(1)).toHaveText(/唯一 id/)
})
