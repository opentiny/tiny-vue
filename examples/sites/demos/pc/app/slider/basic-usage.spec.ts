import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#shortcut-operation')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper > .tiny-slider')
  const sliderBlock = slider.locator('div').nth(1)
  // 获取进度条的宽度
  const { width: sliderWidth } = await slider.boundingBox()
  // 获取当前滑块位置
  const { x, y } = await sliderBlock.boundingBox()
  await sliderBlock.hover()
  await page.mouse.down()
  // 滑块向右移动百分之二十
  await page.mouse.move(sliderWidth * 0.2 + x, y)
  const sliderTip = slider.locator('div').nth(2)
  await expect(sliderTip).toHaveText('59')
  await page.mouse.up()
})
