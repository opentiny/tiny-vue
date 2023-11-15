import { test, expect } from '@playwright/test'

test('懒加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#lazy-load')
  await expect(page.locator('.demo-image__lazy div').locator('img')).toHaveCount(2)
  const imageBox = page.locator('.demo-image__lazy')
  await imageBox.hover()
  await page.mouse.wheel(0, 2000)
  await page.waitForTimeout(300)
  await page.mouse.wheel(0, 1000)
  await expect(page.locator('.demo-image__lazy').locator('img')).toHaveCount(3)
})
