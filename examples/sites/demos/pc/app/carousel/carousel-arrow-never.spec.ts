import { test, expect } from '@playwright/test'

test('隐藏切换箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#carousel-arrow-never')
  const preview = page.locator('#preview')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = preview.locator('div.tiny-carousel__item')

  await carousel.hover()
  await page.waitForTimeout(100)
  const arrow = carousel.locator('.tiny-carousel__arrow')
  // 左侧切换按钮应该不可见
  await expect(arrow.first()).not.toBeVisible()
  // 右侧切换按钮应该不可见
  await expect(arrow.nth(1)).not.toBeVisible()

  // 点击底部按钮切换
  await preview.getByRole('list').getByRole('button').nth(1).click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
