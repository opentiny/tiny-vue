import { test, expect } from '@playwright/test'

test('边框和自定义背景色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#color-border')

  const tags = page.locator('.all-demos-container').locator('.tiny-tag')
  const red = page.locator('span').filter({ hasText: 'red 标签' }).first()
  const custom = page.locator('span').filter({ hasText: '自定义背景色' }).first()

  await expect(red).toHaveClass(/tiny-tag--red/)
  await expect(custom).toHaveCSS('background-color', 'rgba(82, 196, 26, 0.8)')
})
