import { test, expect } from '@playwright/test'

test('测试按钮文字', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#text')

  const demo = page.locator('#text')
  await expect(demo.locator('.tiny-button').first()).toHaveClass(/tiny-button--text/)
  await expect(demo.locator('.tiny-button').nth(1)).toHaveClass(/tiny-button--text/)
  await expect(demo.locator('.tiny-button').nth(2)).toHaveClass(/tiny-button--text/)
  await expect(demo.locator('.tiny-button').nth(3)).toHaveClass(/tiny-button--text/)
  await expect(demo.locator('.tiny-button').nth(4)).toHaveClass(/tiny-button--text/)
  await expect(demo.locator('.tiny-button').nth(5)).toHaveClass(/tiny-button--text/)

  // 纯文本和图标加文本的字体颜色不一样
  await expect(demo.locator('.tiny-button').nth(2)).toHaveCSS('color', 'rgb(20, 118, 255)')
  await expect(demo.locator('.tiny-button').nth(4)).toHaveCSS('color', 'rgb(25, 25, 25)')
})
