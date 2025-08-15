import { test, expect } from '@playwright/test'

test('测试垂直方向排列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('space#space-direction')

  // 切换到 vertical 方向
  await page.getByLabel('column').check()
  const verticalSpace = page.locator('.tiny-space--vertical').first()
  await expect(verticalSpace).toBeVisible()
})
