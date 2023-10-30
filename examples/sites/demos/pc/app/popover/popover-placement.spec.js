import { test, expect } from '@playwright/test'

test('显示位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#popover-placement')

  let top = page.getByRole('button', { name: /top/ })
  let bottom = page.getByRole('button', { name: /bottom/ })
  let left = page.getByRole('button', { name: /left/ })
  let right = page.getByRole('button', { name: /right/ })
  let poppers = page.locator('body > .tiny-popover')

  // top
  await top.hover()
  let box1 = await top.boundingBox()
  let box2 = await poppers.nth(0).boundingBox()
  expect(box1.y - box2.y).toBeGreaterThan(0)
  await page.waitForTimeout(200)
  await page.mouse.move(0, 0)

  // bottom
  await bottom.hover()
  box1 = await bottom.boundingBox()
  box2 = await poppers.nth(1).boundingBox()
  expect(box1.y - box2.y).toBeLessThan(0)
  await page.waitForTimeout(200)
  await page.mouse.move(0, 0)

  // left
  await left.hover()
  box1 = await left.boundingBox()
  box2 = await poppers.nth(2).boundingBox()
  expect(box1.x - box2.x).toBeGreaterThan(0)
  await page.waitForTimeout(200)
  await page.mouse.move(0, 0)

  // right
  await right.hover()
  box1 = await right.boundingBox()
  box2 = await poppers.nth(3).boundingBox()
  expect(box1.x - box2.x).toBeLessThan(0)
  await page.waitForTimeout(200)
})
