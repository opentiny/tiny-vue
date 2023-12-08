import { test, expect } from '@playwright/test'

test('快捷键', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#shortcut-operation')
  const slider = page.locator('.tiny-slider-container .tiny-slider')
  const sliderBlock = slider.locator('.tiny-slider__handle')
  //   鼠标按下滑块
  await sliderBlock.hover()
  await page.mouse.down()
  //   快捷键左键向左移动
  await page.keyboard.press('ArrowLeft')
  await page.keyboard.press('ArrowLeft')
  await sliderBlock.hover()
  await expect(slider.locator('.tiny-slider__tips')).toHaveText('38')

  await page.waitForTimeout(300)
  // 快捷键向右移动
  await page.keyboard.press('ArrowRight')
  await expect(slider.locator('.tiny-slider__tips')).toHaveText('39')

  await page.keyboard.press('PageUp')
  await expect(slider.locator('.tiny-slider__tips')).toHaveText('73')
})
