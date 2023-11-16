import { test, expect } from '@playwright/test'

test('关闭循环轮播', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#close-loop')
  const preview = page.locator('#preview')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = preview.locator('div.tiny-carousel__item')
  const arrow = carousel.locator('.tiny-carousel__arrow')

  // 左侧切换按钮应该不可见
  await expect(arrow.first()).not.toBeVisible()
  // 点击下一张按钮
  await arrow.nth(1).click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  await arrow.nth(1).click()
  // 当前应该显示第三张幻灯片
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  // 右侧切换按钮应该不可见
  await expect(arrow.nth(1)).not.toBeVisible()
  // 点击上一张按钮
  await arrow.first().click()
  // 当前应该显示第一张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
