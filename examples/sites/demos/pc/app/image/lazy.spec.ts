import { test, expect } from '@playwright/test'

test('懒加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#lazy')

  const preview = page.locator('.pc-demo-container')
  await expect(preview.locator('.demo-image__lazy div').locator('img')).toHaveCount(1)

  // 滚动2次，触发下面2张加载
  const imageBox = preview.locator('.demo-image__lazy')
  await imageBox.hover()
  await page.mouse.wheel(0, 300)
  await page.waitForTimeout(100)
  await page.mouse.wheel(0, 500)
  await page.waitForTimeout(30)

  await expect(preview.locator('.demo-image__lazy').locator('img')).toHaveCount(3)
})
