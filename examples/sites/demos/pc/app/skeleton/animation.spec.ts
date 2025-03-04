import { expect, test } from '@playwright/test'

test('动画效果', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#animation')
  const demo = page.locator('#animation')

  const square = page.locator('.tiny-skeleton-item--square')
  const image = page.locator('.tiny-skeleton-item--image')

  // 测试动画效果
  await expect(square).toHaveClass(/tiny-skeleton-item--active/)
  await expect(image).toHaveClass(/tiny-skeleton-item--active/)

  const button = demo.locator('.tiny-button')
  await button.click()
  await page.waitForTimeout(500)
  await expect(square).toHaveClass(/tiny-skeleton-item/)
  await expect(image).toHaveClass(/tiny-skeleton-item/)
})
