import { test, expect } from '@playwright/test'

test('面板阈值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#split-threshold')
  const triggerBtn = page.locator('.tiny-split-trigger')
  const topPanel = page.locator('.top-pane')
  const bottomPanel = page.locator('.bottom-pane')
  const { x, y } = await triggerBtn.boundingBox()
  // 向上滑动时判断下上面面板高度是否为50
  await triggerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(x, y - 100)
  await page.mouse.up()
  const { height: afterHeight } = await topPanel.boundingBox()
  await expect(50).toBeCloseTo(afterHeight, 1)
  await page.waitForTimeout(300)
  // 向下滑动时判断下面面板高度是否为80
  await triggerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(x, y + 200)
  const { height: bottomMove } = await bottomPanel.boundingBox()
  await page.mouse.up()
  await expect(80).toBeCloseTo(bottomMove, 1)
})
