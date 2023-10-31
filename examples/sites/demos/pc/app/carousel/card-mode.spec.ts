import { test, expect } from '@playwright/test'

test('卡片模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#card-mode')
  const preview = page.locator('#preview')
  const carousel = preview.locator('.tiny-carousel')
  const carouselItems = preview.locator('div.tiny-carousel__item')
  // 默认显示第一张幻灯片
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 192.75, 0)')
  // 第二张幻灯片应该可见，并且被缩放
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, 418.267, 0)')
  // 第四张幻灯片应该可见，并且被缩放
  await expect(carouselItems.nth(3)).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, -32.7675, 0)')

  await carousel.hover()
  await page.waitForTimeout(100)
  // 点击下一张按钮
  await preview.locator('button:nth-child(2)').click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 192.75, 0)')
  // 第三张幻灯片应该可见，并且被缩放
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, 418.267, 0)')
  // 第一张幻灯片应该可见，并且被缩放
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, -32.7675, 0)')

  // 点击底部按钮切换
  await preview.getByRole('list').getByRole('button').nth(2).click()
  // 当前应该显示第三张幻灯片
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 192.75, 0)')
  // 第四张幻灯片应该可见，并且被缩放
  await expect(carouselItems.nth(3)).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, 418.267, 0)')
  // 第二张幻灯片应该可见，并且被缩放
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, -32.7675, 0)')

  // 点击上一张按钮
  await page.locator('.tiny-carousel__arrow').first().click()
  // 当前应该显示第二张幻灯片
  await expect(carouselItems.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 192.75, 0)')
  // 第三张幻灯片应该可见，并且被缩放
  await expect(carouselItems.nth(2)).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, 418.267, 0)')
  // 第一张幻灯片应该可见，并且被缩放
  await expect(carouselItems.first()).toHaveCSS('transform', 'matrix(0.83, 0, 0, 0.83, -32.7675, 0)')
})
