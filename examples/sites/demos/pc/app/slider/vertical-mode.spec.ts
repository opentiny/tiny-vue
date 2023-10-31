import { test, expect } from '@playwright/test'

test('竖向滑块', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#vertical-mode')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper > .tiny-slider')
  const sliderBlock = slider.locator('div').nth(1)
  // 获取进度条的高度
  const { height: sliderHeight } = await slider.boundingBox()
  const { x, y } = await sliderBlock.boundingBox()

  await sliderBlock.hover()
  await page.mouse.down()
  await page.mouse.move(x, sliderHeight * 0.2 + y)
  const sliderTip = slider.locator('div').nth(2)
  await expect(sliderTip).toHaveText('20')
  await page.waitForTimeout(300)
  await page.mouse.up()
})
