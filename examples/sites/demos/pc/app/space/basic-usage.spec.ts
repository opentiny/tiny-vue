import { test, expect } from '@playwright/test'

test('测试默认横向排列和子元素渲染', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('space#basic-usage')

  const space = page.locator('.tiny-space')
  await expect(space).toHaveClass(/tiny-space--row/)
  await expect(space.locator('> *')).toHaveCount(2)
})
