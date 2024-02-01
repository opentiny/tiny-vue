import { test, expect } from '@playwright/test'

test('测试偏移量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#offset')

  const tip = page.getByRole('tooltip', { name: '出现位置的偏移量' })
  const arrow = tip.locator('.popper__arrow')

  await expect(tip).toBeVisible()

  // 计算3个位置
  const middle = await arrow.boundingBox()

  await page.dragAndDrop('.tiny-slider__handle', '.pc-demo-container', {
    sourcePosition: { x: 3, y: 3 },
    targetPosition: { x: 0, y: 0 }
  })
  await page.waitForTimeout(10)
  const left = await arrow.boundingBox()

  await page.dragAndDrop('.tiny-slider__handle', '.pc-demo-container', {
    sourcePosition: { x: 3, y: 3 },
    targetPosition: { x: 600, y: 0 }
  })
  await page.waitForTimeout(10)
  const right = await arrow.boundingBox()

  // 测试3个位置
  expect(left.x < middle.x)
  expect(middle.x < right.x)
})
