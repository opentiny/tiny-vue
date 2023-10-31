import { test, expect } from '@playwright/test'

test('纵向轮播', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#up-down-carousel')
  const preview = page.locator('#preview')
  const indicators = preview.getByRole('button')
  const carouselItems = preview.locator('.tiny-carousel__item')
  await indicators.nth(1).hover()
  // 第一张幻灯片在Y轴向上平移了150px
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -150)')
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  // 第三张幻灯片在Y轴向下平移了150px
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 150)')
  // 第四张幻灯片在Y轴向上平移了450px
  await expect(carouselItems.nth(3)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -450)')
})
