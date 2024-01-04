import { test, expect } from '@playwright/test'

test('测试事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#events')
  const errorSlot = page.locator('.tiny-image__error')
  const eventMsg = page.getByText('加载失败触发事件')

  await expect(errorSlot).toHaveCount(1)
  await expect(eventMsg).toHaveCount(1)
})
