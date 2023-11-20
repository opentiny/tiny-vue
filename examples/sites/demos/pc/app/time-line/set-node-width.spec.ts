import { test, expect } from '@playwright/test'

test('节点长度设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#set-step-width')

  const node1 = page.locator('#preview .tiny-steps').first().locator('.tiny-timeline-item').first()
  const { width: itemWidth1 } = await node1.boundingBox()
  expect(Math.round(itemWidth1)).toBeCloseTo(200)

  const node2 = page.locator('#preview .tiny-steps').nth(1).locator('.tiny-timeline-item').first()
  const { width: itemWidth2 } = await node2.boundingBox()
  expect(Math.round(itemWidth2)).toBeCloseTo(160)
})
