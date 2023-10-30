import { test, expect } from '@playwright/test'

test('提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#show-tips')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper')
  const sliderDiv = slider.locator('.tiny-slider > div').nth(1)
  const sliderText = slider.locator('.tiny-slider > div').nth(2)
  // 悬浮至滑块
  await sliderDiv.hover()
  // 弹出框显示提示
  await expect(sliderText).toHaveText('20')
})
