import { test, expect } from '@playwright/test'

test('响应式布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#responsive-layout')

  const preview = page.locator('#preview')
  const layout = preview.locator('.tiny-layout')
  const firstDiv = layout.locator('.tiny-row div').first()

  // 默认视口 1280
  let layoutBox = await layout.boundingBox()
  let firstBox = await firstDiv.boundingBox()
  expect(firstBox.width).toBeCloseTo(layoutBox.width / 3, 0)
  await page.waitForTimeout(300)

  // 测试 sm  850
  await page.setViewportSize({ width: 850, height: 720 })
  await page.waitForTimeout(300)
  layoutBox = await layout.boundingBox()
  firstBox = await firstDiv.boundingBox()
  expect(firstBox.width).toBeCloseTo(layoutBox.width / 4, 0)
})
