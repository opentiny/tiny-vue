import { test, expect } from '@playwright/test'

test('指示器和触发方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#indicator-trigger')
  const preview = page.locator('#preview')
  const carouselItems = preview.locator('div.tiny-carousel__item')
  const indicators = preview.getByRole('list').getByRole('button')

  // 悬浮底部第二个按钮
  await indicators.nth(1).hover()
  // 当前应该显示第一张幻灯片
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  // 点击底部第二个按钮
  await indicators.nth(1).click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
