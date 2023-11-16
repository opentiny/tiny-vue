import { test, expect } from '@playwright/test'

test('步长', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#about-step')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper > .tiny-slider')
  const sliderBlock = slider.locator('div').nth(1)
  // 获取进度条的宽度
  const { width: sliderWidth } = await slider.boundingBox()
  const { x, y } = await sliderBlock.boundingBox()

  await sliderBlock.hover()
  await page.mouse.down()
  await page.mouse.move(sliderWidth * 0.08 + x, y)
  const sliderTip = slider.locator('div').nth(2)
  await expect(sliderTip).toHaveText('30')
  await page.waitForTimeout(300)
  await page.mouse.up()
})
