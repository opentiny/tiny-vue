import { test, expect } from '@playwright/test'

test('hover 时显示切换箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#carousel-arrow-hover')
  const preview = page.locator('#carousel-arrow-hover')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = preview.locator('div.tiny-carousel__item')

  await preview.hover()
  const arrow = carousel.locator('.tiny-carousel__arrow')
  // 左侧切换按钮
  await expect(arrow.first()).toBeVisible()
  // 右侧切换按钮
  await expect(arrow.nth(1)).toBeVisible()
  await page.waitForTimeout(200)
  await preview.hover()
  // 点击下一张按钮
  await preview.locator('button:nth-child(2)').click()
  // 当前应该显示第二张幻灯片
  await page.waitForTimeout(300)
  await preview.hover()
  // 点击上一张按钮
  await page.locator('.tiny-carousel__arrow').first().click()
})
