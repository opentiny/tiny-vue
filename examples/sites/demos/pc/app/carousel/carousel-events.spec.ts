import { test, expect } from '@playwright/test'

test('走马灯事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#carousel-events')
  const preview = page.locator('#preview')
  const carousel = preview.locator('.tiny-carousel')
  const carouselTip = preview.locator('.carousel-tip')

  await carousel.hover()
  await page.waitForTimeout(300)
  const arrow = carousel.locator('.tiny-carousel__arrow')
  // 左侧切换按钮应该可见
  await expect(arrow.first()).toBeVisible()
  // 右侧切换按钮应该可见
  await expect(arrow.nth(1)).toBeVisible()

  // 点击左侧切换按钮
  await arrow.first().click()
  await expect(carouselTip).toHaveText(/3\D+0/)
  await page.waitForTimeout(320)
  // 点击右侧切换按钮
  await arrow.nth(1).click()
  await expect(carouselTip).toHaveText(/0\D+3/)
})
