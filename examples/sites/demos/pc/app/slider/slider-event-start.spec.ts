import { test, expect } from '@playwright/test'

test('start 滑块开始滑动事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#slider-event-start')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper > .tiny-slider')
  const sliderBlock = slider.locator('div').nth(1)
  // 获取进度条的宽度
  const { width: sliderWidth } = await slider.boundingBox()
  const { x, y } = await sliderBlock.boundingBox()

  await sliderBlock.hover()
  await page.mouse.down()
  await page.mouse.move(sliderWidth * 0.4 + x, y)
  await page.mouse.up()
  //   弹出框事件
  await expect(page.locator('div').filter({ hasText: '触发开始滑动事件{"isTrusted":false}' }).first()).toBeVisible()
  await page.waitForTimeout(2000)
})
