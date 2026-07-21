import { test, expect } from '@playwright/test'

test('各型号尺寸是否正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#size')

  const normal = page.locator('span').filter({ hasText: '默认标签' }).first()
  const medium = page.locator('span').filter({ hasText: '中等标签' }).first()
  const small = page.locator('span').filter({ hasText: '小型标签' }).first()

  await expect(normal).toHaveCSS('height', '24px')
  await expect(medium).toHaveCSS('height', '32px')
  await expect(small).toHaveCSS('height', '20px')
})
