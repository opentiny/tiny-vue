import { test, expect } from '@playwright/test'

test('尺寸设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider-button#slider-button-size')

  const demo = page.locator('#slider-button-size')
  const groups = demo.locator('.tiny-slider-button-group')

  // 默认尺寸 small：图标 24px，文本 24px
  const smallIconText = groups.nth(0).locator('.tiny-slider-button__text').first()
  const smallNormalText = groups.nth(1).locator('.tiny-slider-button__text').first()
  await expect(smallIconText).toHaveCSS('height', '24px')
  await expect(smallIconText).toHaveCSS('width', '24px')
  await expect(smallNormalText).toHaveCSS('height', '24px')

  // 中尺寸 medium：图标 28px；文本类型带 medium 相关 class
  const mediumIconText = groups.nth(2).locator('.tiny-slider-button__text').first()
  const mediumNormalText = groups.nth(3).locator('.tiny-slider-button__text').first()
  await expect(mediumIconText).toHaveCSS('height', '28px')
  await expect(mediumIconText).toHaveCSS('width', '28px')
  await expect(mediumIconText).toHaveClass(/tiny-slider-button__text--medium-icon/)
  await expect(mediumNormalText).toHaveClass(/text-sm/)
  await expect(mediumNormalText).toHaveClass(/h-7/)

  // 大尺寸 large：图标 40px，文本 40px
  const largeIconText = groups.nth(4).locator('.tiny-slider-button__text').first()
  const largeNormalText = groups.nth(5).locator('.tiny-slider-button__text').first()
  await expect(largeIconText).toHaveCSS('height', '40px')
  await expect(largeIconText).toHaveCSS('width', '40px')
  await expect(largeNormalText).toHaveCSS('height', '40px')
  await expect(groups.nth(5).locator('.tiny-slider-button').first()).toHaveClass(/tiny-slider-button--large/)
})
