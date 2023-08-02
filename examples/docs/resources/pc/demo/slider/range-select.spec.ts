import { test, expect } from '@playwright/test'

test('范围选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/slider/range-select')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper > .tiny-slider')
  const sliderBlock1 = slider.locator('div').nth(1)
  const sliderBlock2 = slider.locator('div').nth(2)
  // 获取进度条的宽度
  const { width: sliderWidth } = await slider.boundingBox()
  const { x, y } = await sliderBlock1.boundingBox()

  await sliderBlock1.hover()
  await sliderBlock1.hover() 
  await page.mouse.down()
  await page.mouse.move(sliderWidth * -0.1 + x, y)
  const sliderTip = slider.locator('div').nth(3)
  await expect(sliderTip).toHaveText('9')
  await page.mouse.up()
  await page.waitForTimeout(300)

  //   获取第二个滑块的宽度
  const { x: x1, y: y1 } = await sliderBlock2.boundingBox()
  await sliderBlock2.hover()
  await page.mouse.down()
  await page.mouse.move(sliderWidth * 0.1 + x1, y1)
  const sliderTip1 = slider.locator('div').nth(3)
  await expect(sliderTip1).toHaveText('49')
  await page.mouse.up()
})
