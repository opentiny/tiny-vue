import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('sticky#events')

  const demo = page.locator('#events')

  await demo.locator('i').first().scrollIntoViewIfNeeded()
  await expect(page.getByText('触发 change 事件，当前isFixed为：true')).toBeVisible()
})
