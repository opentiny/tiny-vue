import { expect, test } from '@playwright/test'

test('自定义段落宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#custom-paragraph-width')

  const first = page.locator('.tiny-skeleton')
  const item1 = page.locator('.tiny-skeleton-item').nth(1)
  const item2 = page.locator('.tiny-skeleton-item').nth(2)
  const item3 = page.locator('.tiny-skeleton-item').nth(3)

  await expect(first).toHaveCount(1)
  await expect(item1).toHaveCSS('width', '200px')
  await expect(item2).toHaveCSS('width', '100px')
  await expect(item3).toHaveCSS('width', '50px')
})
