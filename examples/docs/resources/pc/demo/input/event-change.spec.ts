import { test, expect } from '@playwright/test'

test('值改变事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/event-change')
  await page.getByPlaceholder('请输入内容', { exact: true }).click()
  await page.getByPlaceholder('请输入内容', { exact: true }).fill('111')
  await page.locator('.rel').click()
  const change = page.getByText('change').nth(4)
  await expect(change).toBeVisible()
})
