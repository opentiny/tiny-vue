import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-size#size-grid-size')
  const mediumTd = page.locator('.size__medium .tiny-grid-body__column').first()
  const { height: heightMedium } = await mediumTd.boundingBox()
  const smallTd = page.locator('.size__small .tiny-grid-body__column').first()
  const { height: heightSamll } = await smallTd.boundingBox()
  const miniTd = page.locator('.size__small .tiny-grid-body__column').first()
  const { height: heightMini } = await miniTd.boundingBox()

  await expect(heightMedium).toBeGreaterThanOrEqual(heightSamll)
  await expect(heightSamll).toBeGreaterThanOrEqual(heightMini)
})
