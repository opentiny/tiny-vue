import { expect, test } from '@playwright/test'

test('段落显示左侧头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#complex-demo')

  const first = page.locator('.tiny-skeleton')
  const avatar = page.locator('.tiny-skeleton__avatar')
  const medium = page.locator('.tiny-skeleton-item--medium')

  await expect(first).toHaveCount(1)
  await expect(avatar).toHaveCount(1)
  await expect(medium).toHaveCount(1)
})
