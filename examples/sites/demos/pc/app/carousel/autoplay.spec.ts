import { test, expect } from '@playwright/test'

test('自动切换', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#autoplay')
  const preview = page.locator('#preview')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = preview.locator('div.tiny-carousel__item')
  // 默认显示第一张幻灯片
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 这里需要等待幻灯片在3秒后切换
  await page.waitForTimeout(3000)
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  await carousel.hover()
  await page.waitForTimeout(100)
  // 点击下一张按钮
  await preview.locator('button:nth-child(2)').click()
  // 当前应该显示第三张幻灯片
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击上一张按钮
  await page.locator('.tiny-carousel__arrow').first().click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
