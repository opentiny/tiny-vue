import { test, expect } from '@playwright/test'

test('总是显示切换箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#carousel-arrow-always')
  const preview = page.locator('#carousel-arrow-always')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = preview.locator('div.tiny-carousel__item')
  // 默认显示第一张幻灯片
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击下一张按钮
  await preview.locator('button:nth-child(2)').click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击上一张按钮
  await page.locator('.tiny-carousel__arrow').first().click()
  // 当前应该显示第一张幻灯片
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')

  // 点击底部按钮切换
  await preview.getByRole('list').getByRole('button').nth(1).click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
})
