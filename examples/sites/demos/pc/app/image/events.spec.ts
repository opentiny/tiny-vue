import { test, expect } from '@playwright/test'

test('加载失败事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#load-error')
  const errorDiv = page.locator('div').filter({ hasText: '加载失败触发事件' }).nth(1)
  await expect(errorDiv).toBeVisible()
})
