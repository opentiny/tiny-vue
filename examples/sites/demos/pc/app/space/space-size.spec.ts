import { test, expect } from '@playwright/test'

test('测试间距尺寸生效', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('space#space-size')

  // 检查 large 尺寸
  const largeSpace = page.locator('.tiny-space--large').first()
  await expect(largeSpace).toBeVisible()

  // 检查自定义数组尺寸 [20, 40]
  const customSpace = page.locator('[style*="--tiny-space-size-x: 20px"]')
  await expect(customSpace).toBeVisible()
})
