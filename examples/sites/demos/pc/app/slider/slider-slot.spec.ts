import { test, expect } from '@playwright/test'

test('自定义插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#slider-slot')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper > .tiny-slider')
  const sliderInput = preview.locator('.tiny-slider__wrapper > .tiny-slider__input')
  const sliderBlock = slider.locator('div').nth(1)
  const { width: sliderWidth } = await slider.boundingBox()
  // 获取当前滑块位置
  const { x, y } = await sliderBlock.boundingBox()
  await sliderBlock.hover()
  await page.mouse.down()
  // 滑块向右移动百分之二十
  await page.mouse.move(sliderWidth * 0.2 + x, y)
  await expect(sliderInput).toHaveText('59%')
})
