import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#size')

  const buttons = page.locator('.button-wrap .tiny-mobile-button')

  // 主要按钮
  const smallPrimaryBtn = buttons.first()
  const size = await smallPrimaryBtn.boundingBox()
  await expect(smallPrimaryBtn).toHaveClass(/tiny-mobile-button--small/)
  expect(size?.height).toBeCloseTo(28, 1)
  expect(smallPrimaryBtn).toHaveCSS('font-size', '12px')

  // 文字按钮
  const smallTextBtn = buttons.nth(3)
  await expect(smallTextBtn).toHaveClass(/tiny-mobile-button--small/)
  expect(smallTextBtn).toHaveCSS('font-size', '12px')

  // 图标按钮
  const smallIconBtn = buttons.nth(4)
  const iconSize = await smallIconBtn.locator('.tiny-icon').boundingBox()
  expect(iconSize?.width).toBeCloseTo(16, 1)
})
