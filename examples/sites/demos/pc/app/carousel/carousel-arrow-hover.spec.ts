import { test, expect } from '@playwright/test'

test('hover 时显示切换箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#carousel-arrow-hover')
  const preview = page.locator('#preview')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = preview.locator('div.tiny-carousel__item')

  await carousel.hover()
  await page.waitForTimeout(100)
  const arrow = carousel.locator('.tiny-carousel__arrow')
  // 左侧切换按钮
  await expect(arrow.first()).toBeVisible()
  // 右侧切换按钮
  await expect(arrow.nth(1)).toBeVisible()

  // 点击下一张按钮
  await preview.locator('button:nth-child(2)').click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击上一张按钮
  await page.locator('.tiny-carousel__arrow').first().click()
  // 当前应该显示第一张幻灯片
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
