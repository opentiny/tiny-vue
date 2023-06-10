import { test, expect } from '@playwright/test'

test('引导线长度设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-line/set-step-width')

  const timeline = page.locator('#preview .tiny-steps')
  const { width: lineWidth } = await timeline.locator('.step-line').first().boundingBox()
  expect(Math.round(lineWidth)).toBeCloseTo(200)
})