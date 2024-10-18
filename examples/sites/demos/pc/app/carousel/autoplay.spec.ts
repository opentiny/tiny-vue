import { test, expect } from '@playwright/test'

test('自动切换', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('carousel#autoplay')
  await page.waitForTimeout(100)
  const preview = page.locator('#autoplay')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = carousel.locator('.tiny-carousel__item')
  // 默认显示第一张幻灯片
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 这里需要等待幻灯片在3秒后切换,注意： 此测试用例只需要关注自动切换即可
  await page.waitForTimeout(3000)
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
