import { test, expect } from '@playwright/test'

test('自定义消息内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#slot-message')

  const demo = page.locator('#slot-message')
  const popconfirm = demo.locator('.tiny-popconfirm')

  await expect(popconfirm).toContainText('这是气泡确认框自定义提示内容文本描述。')
})
