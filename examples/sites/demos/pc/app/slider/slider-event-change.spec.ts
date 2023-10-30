import { test, expect } from '@playwright/test'

test('change事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#slider-event-change')
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
  await expect(page.locator('div').filter({ hasText: '触发change事件改变值为59' }).first()).toBeVisible()
  await page.waitForTimeout(300)
})
