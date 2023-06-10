import { test, expect } from '@playwright/test'

test('控制按钮设置在右侧显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/numeric/controls-position')

  const numeric = page.locator('#preview .tiny-numeric')
  const decreaseBtn = numeric.locator('.tiny-numeric__decrease')
  const numericBox = await numeric.boundingBox()
  const decreaseBtnBox = await decreaseBtn.boundingBox()
  await expect(numeric).toHaveClass(/is-controls-right/)
  // 判断按钮是否位于右侧
  expect(numericBox.x).toBeLessThan(decreaseBtnBox.x)
  await decreaseBtn.click()
  await numeric.locator('.tiny-numeric__increase').click()
})