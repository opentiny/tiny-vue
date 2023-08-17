import { test, expect } from '@playwright/test'

test('清除事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/event-clear')
  await page.getByPlaceholder('请输入内容', { exact: true }).click()
  await page.getByPlaceholder('请输入内容', { exact: true }).fill('1111')
  await page.locator('#preview').getByRole('img').nth(1).click()
  const change = page.getByText('clear').nth(4)
  await expect(change).toBeVisible()
})
