import { test, expect } from '@playwright/test'

test('加载成功事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#load-event')
  const eventDiv = await page.locator('div').filter({ hasText: '加载成功触发事件' }).nth(1)
  await expect(eventDiv).toBeVisible()
  await page.waitForTimeout(300)
})
