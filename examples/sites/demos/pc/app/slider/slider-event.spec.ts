import { test, expect } from '@playwright/test'

test('start 滑块开始滑动事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#slider-event')
  const slider = page.locator('.tiny-slider-container .tiny-slider')
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


test('change 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#slider-event')
  const slider = page.locator('.tiny-slider-container .tiny-slider')
  const sliderBlock = slider.locator('div').nth(1)
  // 获取进度条的宽度
  const { width: sliderWidth } = await slider.boundingBox()
  // 获取当前滑块位置
  const { x, y } = await sliderBlock.boundingBox()
  await sliderBlock.hover()
  await page.mouse.down()
  // 滑块向右移动百分之二十
  await page.mouse.move(sliderWidth * 0.2 + x, y)
  await expect(page.locator('div').filter({ hasText: '触发 change 事件改变值为 59' }).first()).toBeVisible()
  await page.waitForTimeout(300)
})

test('stop 滑块停止滑动事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#slider-event')
  const slider = page.locator('.tiny-slider-container .tiny-slider')
  const sliderBlock = slider.locator('div').nth(1)
  // 获取进度条的宽度
  const { width: sliderWidth } = await slider.boundingBox()
  const { x, y } = await sliderBlock.boundingBox()

  await sliderBlock.hover()
  await page.mouse.down()
  await page.mouse.move(sliderWidth * 0.4 + x, y)
  await page.mouse.up()
  //   弹出框事件
  await expect(page.locator('div').filter({ hasText: '触发停止滑动事件停止后值为 79' }).first()).toBeVisible()
})
