import { test, expect } from '@playwright/test'

test('文字滚动方向', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#scroll-direction')
  await expect(page.locator('.tiny-scroll-text__content').nth(0)).toHaveCSS('animation-name', 'moveLeft')
  await expect(page.locator('.tiny-scroll-text__content').nth(1)).toHaveCSS('animation-name', 'moveRight')
  await expect(page.locator('.tiny-scroll-text__content').nth(2)).toHaveCSS('animation-name', 'moveUp')
  await expect(page.locator('.tiny-scroll-text__content').nth(3)).toHaveCSS('animation-name', 'moveDown')
})
