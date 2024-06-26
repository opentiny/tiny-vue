import { test, expect } from '@playwright/test'

test('忽略边界判断', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#ignore-boundaries')

  const title = page.locator('.tiny-popover__title').filter({ hasText: /标题/ }).first()
  const button = page.locator('.btn-fjtc')

  await page.waitForTimeout(3000)
  const box1 = await title.boundingBox()
  const box2 = await button.boundingBox()
  console.log(box1, box2)
  await expect(box1.y).toBeLessThan(box2.y)
})
