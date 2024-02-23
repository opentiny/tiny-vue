import { expect, test } from '@playwright/test'

test('细粒度模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#fine-grained-mode')

  const first = page.locator('.tiny-skeleton')
  const radio1 = page.locator('.tiny-radio').nth(0)
  const radio2 = page.locator('.tiny-radio').nth(1)
  const radio3 = page.locator('.tiny-radio').nth(2)
  const activeSwitch = page.locator('.pc-demo > div > .tiny-switch')
  const image = page.locator('.tiny-skeleton-item--image')
  const circle = page.locator('.tiny-skeleton-item--circle')
  const square = page.locator('.tiny-skeleton-item--square')

  await expect(first).toHaveCount(1)

  // 测试动画效果
  await expect(circle).toHaveClass(/tiny-skeleton-item--active/)
  await expect(square).toHaveClass(/tiny-skeleton-item--active/)
  await expect(image).toHaveClass(/tiny-skeleton-item--active/)

  await activeSwitch.click()
  await page.waitForTimeout(500)
  await expect(image).not.toHaveClass(/tiny-skeleton-item--active/)
  await expect(circle).not.toHaveClass(/tiny-skeleton-item--active/)
  await expect(square).not.toHaveClass(/tiny-skeleton-item--active/)

  // 测试大小
  await radio2.click()
  await page.waitForTimeout(500)
  await expect(radio2).toHaveClass(/is-checked/)
  await expect(circle).toHaveClass(/tiny-skeleton-item--medium/)
  await expect(image).toHaveClass(/tiny-skeleton-item--medium/)
  await expect(square).not.toHaveClass(/tiny-skeleton-item--medium/)

  await radio1.click()
  await page.waitForTimeout(500)
  await expect(radio1).toHaveClass(/is-checked/)
  await expect(circle).toHaveClass(/tiny-skeleton-item--small/)
  await expect(image).toHaveClass(/tiny-skeleton-item--small/)
  await expect(square).not.toHaveClass(/tiny-skeleton-item--small/)

  await radio3.click()
  await page.waitForTimeout(500)
  await expect(radio3).toHaveClass(/is-checked/)
  await expect(circle).toHaveClass(/tiny-skeleton-item--large/)
  await expect(image).toHaveClass(/tiny-skeleton-item--large/)
  await expect(square).not.toHaveClass(/tiny-skeleton-item--large/)
})
