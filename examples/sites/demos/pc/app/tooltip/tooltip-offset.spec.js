import { test, expect } from '@playwright/test'

test('测试偏移量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#tooltip-offset')

  const button = page.getByRole('button', { name: '出现位置的偏移量' })
  const tip = page.getByRole('tooltip', { name: '出现位置的偏移量' })

  await button.hover()
  await page.waitForTimeout(300)
  const box1 = await button.boundingBox()
  const box2 = await tip.boundingBox()

  expect(box2.x - box1.x).toBeGreaterThanOrEqual(20)
})
