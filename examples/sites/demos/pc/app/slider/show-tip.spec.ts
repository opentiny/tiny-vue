import { test, expect } from '@playwright/test'

test('提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#show-tip')
  const slider = page.locator('.tiny-slider-container .tiny-slider')

  const sliderDiv = slider.locator('.tiny-slider__handle')
  const sliderText = slider.locator('.tiny-slider__tips')
  // 悬浮至滑块
  await sliderDiv.hover()
  // 弹出框显示提示
  await expect(sliderText).toHaveText('当前值为：20')
})
