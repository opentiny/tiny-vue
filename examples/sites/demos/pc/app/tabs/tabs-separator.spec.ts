import { test, expect } from '@playwright/test'

test('分隔符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-separator')

  const container = page.locator('#tabs-separator')
  const tabs1 = container.locator('.tiny-tabs')
  const content1 = tabs1.locator('.tiny-tabs__item-separator')

  const { width, height } = await content1.first().boundingBox()

  await expect(width).toBeGreaterThanOrEqual(0.7)
  await expect(height).toBeGreaterThanOrEqual(12)
})
