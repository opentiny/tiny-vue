import { test, expect } from '@playwright/test'

test('走马灯事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#carousel-events')
  const preview = page.locator('#carousel-events')
  const carousel = preview.locator('.tiny-carousel')
  const arrow = carousel.locator('.tiny-carousel__arrow')
  const carouselTip = preview.locator('.carousel-tip')
  await preview.hover()
  await page.waitForTimeout(320)
  await page.getByRole('list').getByRole('button').nth(1).click()
  // 点击左侧切换按钮
  await arrow.first().click()
  // 左侧切换按钮应该可见
  await expect(arrow.first()).toBeVisible()
  await expect(carouselTip).toHaveText(/当前幻灯片索引/)
})
