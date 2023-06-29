import { test, expect } from '@playwright/test'

test('文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/checkbox/text')
  const preview = page.locator('#preview')
  await preview.locator('span').nth(2).click()
  await preview.getByRole('button', { name: '获取文本' }).click()
  await expect(page.locator('.tiny-modal').filter({ hasText: 'change 事件，当前选中的值为:真文本' })).toBeVisible()
})
