import { test, expect } from '@playwright/test'

test('弹出框偏移', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#frame-offset')

  let poppers = page.locator('.tiny-popover')

  const box1 = await poppers.nth(0).boundingBox()
  const box2 = await poppers.nth(1).boundingBox()
  const box3 = await poppers.nth(2).boundingBox()

  expect(box1.x - box2.x).toEqual(50)
  expect(box3.x - box1.x).toEqual(50)
})
