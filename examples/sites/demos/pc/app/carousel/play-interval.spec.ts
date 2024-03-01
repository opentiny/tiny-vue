import { test, expect } from '@playwright/test'

test('轮播间隔时间', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#play-interval')
  const preview = page.locator('#play-interval')
  const carouselItems = preview.locator('div.tiny-carousel__item.is-animating')
  const carouselItemsActive = preview.locator('div.tiny-carousel__item.is-active')
  await page.waitForTimeout(500)
  await expect(carouselItemsActive).toHaveCSS('z-index', '2')
  await page.waitForTimeout(500)
})
